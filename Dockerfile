# Use a node image as the base
FROM node:latest as build

# Install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Copy all local files into the image
COPY . .

# Build the application with the node adapter
RUN npm run build

# Use a node image for the deployment stage
FROM node:latest

# Copy the build folder from the previous stage
WORKDIR /app
COPY --from=build /app/build .

# Expose port 3000 and run the app
EXPOSE 3000
CMD ["node", "./index.js"]
