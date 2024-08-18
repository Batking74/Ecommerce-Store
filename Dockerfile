# Use the official Node.js LTS slim image
FROM node:lts-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files first to leverage Docker cache
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose port 4000 to the outside world
EXPOSE 7000

# Command to run your application
CMD ["npm", "start", "0.0.0:7000"]