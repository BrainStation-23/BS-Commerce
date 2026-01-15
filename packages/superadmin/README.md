# BS Commerce Back Office

-   Node >= 22.12.x

## USING YARN (Recommend)

-   yarn install
-   yarn dev

## USING NPM

-   npm i OR npm i --legacy-peer-deps
-   npm run dev

## Build

-   yarn build

# Deployment Strategy

The project is hosted on AWS S3 as a static website and distributed through AWS CloudFront(CloudFront for staging and production).

## Development Environment Deployment

GitHub Actions are leveraged for automating the deployment of the staging server. The deployment workflow is triggered by releases. The following semantic versioning pattern is used for staging deployments:

```
v[0-9]+.[0-9]+.[0-9]+-dev.[0-9]+
```

For example, `v1.0.2-dev.1`

## Staging Environment Deployment

GitHub Actions are leveraged for automating the deployment of the staging server. The deployment workflow is triggered by releases. The following semantic versioning pattern is used for staging deployments:

```
v[0-9]+.[0-9]+.[0-9]+-rc.[0-9]+
```

For example, `v1.0.2-rc.1`

## Production Environment Deployment

The production deployment process mirrors the staging deployment, with the key difference being the versioning pattern used. The following pattern is employed for production deployments:

```
v[0-9]+.[0-9]+.[0-9]+
```

For example, `v1.0.2`
