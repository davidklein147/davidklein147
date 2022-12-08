# syntax=docker/dockerfile:1

# Use official node image as the base image
FROM node:14.17.3 as build

# Set the working directory
RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

CMD echo $PATH
COPY "package.json" "./"


# Install all the dependencies
RUN npm install -g @angular/cli@12.0.05
RUN npm install

# Add the source code to app
COPY . .
# RUN npm start

# Generate the build of the application
RUN ng build





# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/RememberLanguage /usr/share/nginx/html

# Expose port 80

# EXPOSE 80