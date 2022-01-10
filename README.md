# Interface Utilisateur JustStreamIt

[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://forthebadge.com)

Interface utilisateur pour une application web Python

### Pré-requis

- Python 3.9 (Installer Python 3.9 depuis https://www.python.org/)
- Terminal
- Git
- Navigateur (Chrome, Firefox, Edge, Safari, etc...)


### Installation et exécution de l'application avec pipenv

1. Cloner ce dépôt de code à l'aide de la commande `git clone https://github.com/seah78/P6.git`
2. Rendez-vous depuis un terminal à la racine du répertoire avec la commande `cd P6/OCMovies-API-EN-FR/`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`

Les étapes 1 à 4 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter l'étape 5 à partir du répertoire racine du projet.

### Installation et exécution de l'application sans pipenv (avec venv et pip)

1. Cloner ce dépôt de code à l'aide de la commande `git clone https://github.com/seah78/P6.git`
2. Rendez-vous depuis un terminal à la racine du répertoire avec la commande `cd P6/OCMovies-API-EN-FR/`
3. Créer un environnement virtuel pour le projet avec `python -m venv env` sous windows ou `python3 -m venv env` sous macos ou linux.
4. Activez l'environnement virtuel avec `env\Scripts\activate` sous windows ou `source env/bin/activate` sous macos ou linux.
5. Installez les dépendances du projet avec la commande `pip install -r requirements.txt`
6. Créer et alimenter la base de données avec la commande `python manage.py create_db`
7. Démarrer le serveur avec `python manage.py runserver`

Les étapes 1 à 6 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter les étapes 4 et 7 à partir du répertoire racine du projet.


## Démarrage

Depuis le gestionnaire de fichier, rendez-vous dans le répertoire P6 et cliquez sur index.html

## Résultat

La page s'affiche dans le navigateur

## Fabriqué avec

* Visual Studio Code

## Versions

Version actuelle : 1.0.0
Liste des versions : [Cliquer pour afficher](https://github.com/seah78/P6/tags)

## Auteurs

* ** Sébastien HERLANT ** _alias_ [@seah78](https://github.com/seah78)

## License

Ce projet est sous licence ``exemple: WTFTPL`` - voir le fichier [LICENSE.md](LICENSE.md) pour plus d'informations


