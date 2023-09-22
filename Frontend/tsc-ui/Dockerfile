# Use Nginx as the base image
FROM nginx:alpine

# Copy the build files from your React app into the Nginx directory
COPY ./build /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]