# carambar-co-githubpages
Client Angular de l'application CarambarCo hébérger via Github Pages

LIEN GitHub pages : https://shaynetwok.github.io/carambar-co-githubpages/

/!\ A faire avec Powershell car avec Gitbash, le href est modifié dans le dist ce qui conduit à un liens href faussé /!\
- Commande pour build le dossier "/dist" en local qui comprendra notre application Github Pages

ng build --configuration production --base-href "/carambar-co-githubpages/"

- Commande pour déployer le "/dist" en local dans la branch gh-pages en remote (la branche sera crée automatiquement par la commande si elle n'existe pas)

npx angular-cli-ghpages --dir=dist/carambar-co-githubpages/browser


