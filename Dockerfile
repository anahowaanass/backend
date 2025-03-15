# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of your project files into the container
COPY . .

# Expose the port that Soketi will run on
EXPOSE 6001

# Command to start Soketi
CMD ["soketi", "start"]
