export function stringToColor(string: string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

export function stringAvatar(name: string) {
	const getAlphaChar = (str: string, index: number) => {
		// Get a character code between 65-90 (A-Z) based on string's charCodes
		// Using a consistent hash to ensure same string always maps to same character
		const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
		return String.fromCharCode(65 + (hash % 26));
	};

	const findFirstAlphaChar = (word: string): string => {
		// Find first alphabetic character in the word
		const match = word.match(/[A-Za-z]/);
		return match ? match[0].toUpperCase() : '';
	};

	// Normalize the name to ensure consistent results
	const normalizedName = name.trim().replace(/\s+/g, ' ');
	
	const initials = normalizedName
		.split(' ')
		.map((word) => {
			if (!word) return '';
			
			const firstChar = word[0]?.toUpperCase();
			if (firstChar && /[A-Z]/.test(firstChar)) {
				return firstChar;
			}

			const firstAlpha = findFirstAlphaChar(word);
			if (firstAlpha) {
				return firstAlpha;
			}

			// If no alphabetic characters found, generate one deterministically from the word
			return getAlphaChar(word, 0);
		})
		.filter(Boolean)
		.splice(0, 2)
		.join('');

	// Use the normalized name for color generation to ensure consistency
	return {
		sx: {
			bgcolor: stringToColor(normalizedName),
		},
		children: initials,
	};
}
