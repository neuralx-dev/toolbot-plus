# Use a node image as the base
FROM node:14.15.0 as build

# Install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image
COPY . .

# Build the application with the node adapter
RUN npm run build

# Use a node image for the deployment stage
FROM node:14.15.0

# Copy the build folder from the previous stage
WORKDIR /app
COPY --from=build /app/build .

# Expose port 3000 and run the app
EXPOSE 3000
CMD ["node", "./index.js"]
