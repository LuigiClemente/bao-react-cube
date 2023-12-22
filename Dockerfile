# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16
# Set the working directory to /app inside the container
WORKDIR /app
# Copy the package.json file to the container
COPY package.json .
# Install dependencies
# add ENV NODE_ENV=production
ENV NODE_ENV=production
ENV REACT_APP_CUBEJS_TOKEN=$REACT_APP_CUBEJS_TOKEN
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN yarn 
# Copy the rest of the files to the container
COPY . .
# Expose port 3000
EXPOSE 3002
# Run the app
CMD ["yarn", "start"]
