# Flask MongoDB TypeScript Docker Template

This template is tailored for upcoming hackathons and is available for projects where my direct involvement is not anticipated. To maintain confidentiality, please keep the template information between us. While NodeJS is often suggested as a default, Python, with its widely-known syntax and faster development cycle, offers a compelling alternative.

## Pre-Requisites

- [Node JS](https://nodejs.org/en/download/current)
- [Python](https://www.python.org/)
- [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)

## Backend Setup

1. Navigate into the "backend" folder:

    ```bash
    cd backend
    ```

2. Create and activate the virtual environment:

    ```bash
    python3 -m venv venv
    source venv/bin/activate # On Unix/Mac
    venv\Scripts\activate # On Windows, should see (venv) in front of terminal
    ```
   
    **Possible WINDOWS error:** Cannot load script due to Execution Policy.
    
    - **Solution:** Open PowerShell and execute the following:
        
        ```powershell
        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
        ```

3. Download pip packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Start HACKING!!

    ```bash
    docker-compose up --build
    ```
   
    **Possible WINDOWS error:** Docker daemon is not running.
    
    - **Solution:** Open Docker Desktop.

## Docker Notes

Docker is a platform that uses containerization to package applications and their dependencies for seamless deployment across various environments. It ensures consistency, portability, and efficiency by isolating applications in lightweight, standalone **containers**. Docker facilitates easy scaling, aligns with DevOps practices, and boasts a robust community and ecosystem. It has become a key tool in modern software development, streamlining the development-to-deployment process.

## Backend Notes

1. Ensure that you are operating within the virtual environment (venv) in the terminal.

2. Every time you install a new Python package, and before each commit involving a new package, run the following command:

    ```bash
    pip freeze > requirements.txt
    ```

    - **Quick Explanation:** The virtual environment (venv) is separate from your local computer. By activating it, you ensure that only the necessary packages for your project are installed. Running the above command captures the current state of installed packages and updates the `requirements.txt` file, making it easier to manage dependencies. This practice helps maintain a clean and project-specific environment.

3. Avoid using AUTOSAVE. Every time you save, the Flask app will be rerun. If autosave is on, it may save in the middle of your code writing, causing syntax errors. This forces you to run `docker-compose up` again, becoming very tedious.

## Suggested Backend Tools

- **Postman:**
    - Allows testing of each backend endpoint easily, simulating how it would work in production.

## Frontend Setup

1. Install npm packages:

    ```bash
    npm install
    ```

2. START HACKING!

    ```bash
    npm run start
    ```

    **Possible Error:** `ENOENT: no such file or directory, lstat 'C:\Users\Athavan Thambimuthu\AppData\Roaming\npm'`
    
    **Solution:** Run `npm install npm -g`

## Overall App Flow
![appflow](https://github.com/Arty2001/flask-mongodb-typescript-docker-template/assets/64709386/017ac2c2-311f-4f32-bfc0-ec673e51d216)

## Frontend Directory Organization

When working with the frontend, most of your attention will be directed towards the `src` folder. Let's take a closer look at its structure:

### `src/app.tsx`

The heart of your frontend application resides in `app.tsx`. This file plays a pivotal role as it encapsulates the routing logic and hosts the main header component. The routing logic is crucial for navigating between different pages based on user interactions.

In essence, `app.tsx` is the orchestrator of your frontend application, ensuring that users are directed to the correct components based on the chosen routes.

### `src/pages`

The `pages` folder is where you'll find components dedicated to each route within your application. Each route typically corresponds to a specific page, and the components within this folder encapsulate the visual elements and functionalities associated with those pages.

As a beginner, it's beneficial to explore and understand the contents of the `pages` folder to get a grasp of how different sections of your application are structured and organized.

### `src/components`

In software development, reusability is a key principle, and the `components` folder is where this concept comes to life. Here, you'll discover a collection of reusable components, often representing "divs" or smaller, self-contained UI elements.

These components are designed to be flexible and can be easily integrated into various sections of your application. As you progress in your development journey, you'll find that creating modular and reusable components significantly enhances the maintainability and scalability of your code.

For beginners, exploring the contents of the `components` folder is an excellent way to understand how individual UI elements are constructed and how they contribute to the overall user interface.

Understanding these key folders and their contents provides a solid foundation for navigating and contributing to the frontend of your project. As you delve into frontend development, experimenting with modifications to `app.tsx`, creating new pages in the `pages` folder, and crafting reusable components in the `components` folder will be fundamental aspects of your learning journey.

## Backend Directory Organization

In the backend structure, Flask follows a modular approach using a concept called **blueprints**. Let's explore how the backend is organized:

### `app.py`

At the core of your Flask backend lies `app.py`. This file serves as the main entry point for your Flask application. Here, you define the Flask app instance, configure routes, and handle various aspects of your web application.

The simplicity and flexibility of Flask allow you to structure your application by adding multiple blueprints to `app.py`. Blueprints are a way to organize your application into smaller, reusable components. They encapsulate routes, templates, and static files, making it easier to manage and scale your project.

### `blueprints`

The `blueprints` folder is where you store your various Flask blueprints. A **blueprint** is a way to organize a group of related views, templates, and static files. By grouping related functionality together, blueprints provide a clear and modular structure to your Flask application.

Each blueprint typically represents a logical section of your application, such as authentication, user management, or API endpoints. Organizing your code into blueprints promotes maintainability and allows for easy expansion as your application grows.

### `blueprints/template`

Inside the `blueprints/template` directory, you'll find an example showcasing common HTTP methods — GET, POST, PUT, and DELETE. These methods correspond to the standard CRUD (Create, Read, Update, Delete) operations commonly used in web development.

Understanding this template is crucial as it serves as a reference for handling different types of requests. For a beginner, this directory is a valuable resource to study and learn how to structure route handling functions for various HTTP methods.

**Quick Explanation of Blueprints:**

- In Flask, a blueprint is a way to organize a group of related views, templates, and static files into a modular and reusable component.

- Blueprints help break down large applications into smaller, manageable parts, promoting code organization and maintainability.

- In `app.py`, you import and register blueprints to integrate their functionality into the main application.