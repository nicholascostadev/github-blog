- [Explanation of the project](#explanation-of-the-project)
  - [Technologies used](#technologies-used)
  - [If you want to run it locally](#if-you-want-to-run-it-locally)
  - [Additional features](#additional-features)
---

<br>

Example routing : http://github-blog-eta.vercel.app/nicholacostadev/github-blog

# Explanation of the project

This project takes any project from the github and searches for it's issues and shows it as a blog post. For example, you can access the routes:

**_Ps: [...] means the website_**

- `.../nicholascostadev/github-blog` and it will show you the issues of the project as it was a blog post.

- `.../nicholascostadev/github-blog/issues/1` will show you the issue with the id 1.

You can use it that way in any other project on github you want, just by accessing with `.../[githubuser]/[githubproject]`

## Technologies used

1. [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
2. [Styled Components](https://styled-components.com/) for styling as React components
3. [Axios](https://axios-http.com) for http requests for the github API
4. [React-markdown](https://github.com/remarkjs/react-markdown) for rendering markdown as html(used for the posts)


## If you want to run it locally

```bash
# Clone the project
git clone https://github.com/nicholascostadev/github-blog
# Change to the project folder
cd github-blog
# Install all the dependencies
yarn
# Run the server locally
yarn dev
```

## Additional features

For you to follow the code's styling, you can run the following commands:

```bash
# For linting all files and search for inconsistencies or errors
yarn lint 

# For linting all files and search for inconsistencies or errors and fix all the errors that can be automatically fixed 
yarn lint:fix 
```