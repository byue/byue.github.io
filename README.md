<h1 align="center">Architech Solutions</h1>

## Contribution Guidelines

Commands are run on "main" branch. Source files are on "main" branch. For deployments, static file artifacts are written to "deploy" branch. Never commit directly to deploy branch, this is done automatically by deploy command.

1. Get latest changes from main

    ```shell
    git checkout main
    git pull
    ```

2. At the root project directory, create files .env.production and .env.development. Fill these with this content:
   ```
   GATSBY_WEB3_API_URL=https://api.web3forms.com/submit
   GATSBY_WEB3_API_KEY=<TOKEN>
   ```

3. Install packages if needed

   ```shell
   npm install --legacy-peer-deps
   ```

4. Checkout new feature branch that branches off of main

    ```shell
    git checkout -b <feature_branch_name>
    ```

5. Make and commit changes.

    ```shell
    git add .
    git commit -m "message"
    ```

6. Check for build errors.

    ```shell
    npm run build
    ```

7. Test by running server locally.

    ```shell
    npm run start
    ```

    [Local Site](http://localhost:8000)


8. Push feature branch to remote.

    ```shell
    git push --set-upstream origin <feature_branch_name>
    ```

9. Create Pull Request to [Main](https://github.com/byue/byue.github.io/tree/main) branch.

10. Address Pull request comments. Make changes if required, and push updates for next review iteration.

    ```shell
    git add .
    git push
    ```

11. Once review is approved, code review can be merged into "main" branch.

12. Deploy changes to production site. This generates and commits static files to "deploy" branch.

    ```shell
    npm run deploy
    ```

13. View production site.

    [Production Site](https://www.architech-solutions.com)

## 🥪 Stack
- Domain Registrar/DNS/Visit Metrics: [CloudFlare](https://www.cloudflare.com/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Frontend Meta Framework (SSG): [Gatsby](https://www.gatsbyjs.com/)
- Frontend Framework: [React](https://react.dev/)
- CSS Tooling: [Tailwind CSS](https://tailwindcss.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/introduction/)
- Particle Effects: [TS Particles](https://particles.js.org/)
- UI Components: [Aceternity](https://ui.aceternity.com/components)
- Photo Assets: [Unplash](https://unsplash.com/)
- Email Submission [Web3 Forms](https://web3forms.com/)