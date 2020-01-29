# 2020
Welcome to the Belize 2020 Github Repo!  

The site is built in HUGO Static Site Generator
https://gohugo.io/


Tutorial
https://www.mikedane.com/static-site-generators/hugo/

We will store our Hugo source files here.  Upon merge to master, webhooks will be set up to automatically deploy the site to the CloudApps container.  This pushes the /pubic directory only. 


Pushing to GH Pages If you want to commit your changes to GitHub Pages, follow these steps!

Merge all branches into the master

Commit all changes to the master and push

Hugo

Cd into the public folder

Git add -A

Git commit -m "add your message here"

Cd ..

git push origin gh-pages
