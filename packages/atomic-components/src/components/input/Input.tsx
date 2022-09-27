import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, getIn } from "formik";
export interface IInput {
	type: string;
	required?: boolean;
	icon?: JSX.Element;
	iconFocus?: JSX.Element;
	value?: string;
	id: string;
	placeholder?: string;
	as?: string;
	errors?: any;
	touched?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<IInput> = ({ type, required, icon, iconFocus, value, id, placeholder, errors, touched }: IInput) => {
	const [focus, setFocus] = useState(false);
	const componentRef = useRef();
	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e: any) {
			if (componentRef && componentRef.current) {
				const ref: any = componentRef.current;
				if (!ref.contains(e.target)) {
					setFocus(false);
				}
			}
		}
	}, []);

	return (
		<>
			<div className="relative flex items-center" onClick={() => setFocus(true)}>
				<span className="absolute top-3 left-3">{focus ? iconFocus : icon}</span>
				<Field
					innerRef={componentRef as any}
					type={type}
					id={id}
					name={id}
					value={value}
					className={`block w-full rounded-lg border border-gray-300 p-2.5 pl-10 text-sm text-gray-900 placeholder-gray-600 outline-none focus:border-blue-500 focus:text-[#8330C2] focus:shadow-sm focus:ring-blue-500`}
					style={{ borderColor: `${errors && touched ? "red" : ""}` }}
					placeholder={required ? `${placeholder}*` : `${placeholder}`}
				/>
			</div>
			{/* <div className="errMsg text-red-600">
				<ErrorMessage name={id} />
			</div> */}
			{errors && touched && <span className="text-red-600">{errors}</span>}
		</>
	);
};
