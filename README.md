# UAE AI Ethics

AI’s rapid advancement and innovation potential across a range of fields is incredibly exciting. Yet a thorough and open discussion around AI ethics, and the principles organisations using this technology must consider, is urgently needed.

AI Office Ethical AI Toolkit has been created to provide practical help across a city ecosystem. It supports industry, academia and individuals in understanding how AI systems can be used responsibly. It consists of principles and guidelines, and a self-assessment tool for developers to assess their platforms.

Our aim is to offer unified guidance that is continuously improved in collaboration with our communities. The eventual goal is to reach widespread agreement and adoption of commonly-agreed policies to inform the ethical use of AI not just in UAE but around the world.

## General Information

### Who is this toolkit for?

If you are building or acquiring algorithms in the government sector this toolkit is for you. Though we expect others will find it useful.

### What is the toolkit?

The toolkit is really a process. It walks you through a series of questions to help you 1) understand the ethical risks posed by your use of an algorithm and then 2) identify what you can do to minimize those ethical risks.

### What are the parts of the toolkit?

The toolkit comes in several parts:

1. The introduction to the toolkit (this document)
2. Part 1: Assess Algorithm Risk
3. Part 2: Manage Algorithm Risk
4. Appendices (including a handy worksheet)

### Who made this toolkit?

The tool is built on top of research made by a collaboration between The Center for Government Excellence (GovEx) at Johns Hopkins, the City and County of San Francisco, Harvard DataSmart, and Data Community DC.

## When you should use this toolkit

In short, whenever you are using an algorithm to inform a decision in the public sector. Below are just a
handful of real-life scenarios where algorithms have been used:

* Working to make the restaurant inspections pipeline in Chicago more efficient 
* Predicting the engagement of African American families in city services 
* Determining a demographic to target for pre-K enrollment outreach 
* Automating public assistance eligibility in Indiana

In most situations, the creators of the algorithm intended for them to be additive and useful. Algorithms are used in our criminal justice system, employment arenas, higher education processes, and even social media networks. They are used to evaluate our teachers, rank our credit, insure our cars, and more. They have the potential to classify, associate, or filter information using human-crafted and/or data-induced rules that allow for consistent treatment across populations.

**All of these circumstances sound positive, so what is the problem?​** For one, algorithmic bias could have significant impact when government organizations decide how to distribute services or dole out justice based on the output of data-driven algorithms.

**When do algorithms come into play?** ​In the context of civic processes, ​example​ use cases include:

1. Segmenting and targeting residents for individual-level results.​ For example, a classification algorithm to determine which constituent base to contact for a new city initiative.
2. Optimizing civic processes.​ For example, using a processing software to automate the application process to the Supplemental Nutrition Assistance Program.
3. Personal quantification and performance optimization. ​For example, implementing a new regression algorithm for employees to measure their own performance.
4. Improving healthcare and public health. ​For example, creating a cancer risk scoring algorithm for constituents using their genetic data.
5. Improving science and research.​ For example, using a natural language processing algorithm to analyze large amounts of research literature.
6. Optimizing machine performance.​ For example, consistently updating an algorithm with new training data.
7. Improving security and law enforcement. ​For example, creating an algorithm that determines at-risk neighborhoods each month.


**Where should you remain alert?**​ The prior examples could pop up during in-house development, adoption, or acquisition. Algorithms can be developed internally or adopted through a third-party or developer. Typically, the in-house development of algorithms allows more control than acquired algorithms. The toolkit covers some tools to help implement control over acquired algorithms.

**How can this toolkit help?​** This toolkit walks you through a practical set of questions that will help any person or organization be intentionally considerate and cautious in their use of algorithms.

# Development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

If you want to contribute to a project and make it better, your help is very welcome. Contributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.

### How to make a clean pull request

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
- Add the original repository as a remote called `upstream`.
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Create a new branch to work on! Branch from `develop` if it exists, else from `main`.
- Implement/fix your feature, comment your code.
- Follow the code style of the project, including indentation.
- If the project has tests run them!
- Write or adapt tests as needed.
- Add or change the documentation as needed.
- Squash your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.
- Push your branch to your fork on Github, the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, else go for `master`!
- If the maintainer requests further changes just push them to your branch. The PR will be updated automatically.
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete
your extra branch(es).

And last but not least: Always write your commit messages in the present tense. Your commit message should describe what the commit, when applied, does to the code – not what you did to the code.