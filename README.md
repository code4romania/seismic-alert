# Seismic Risc

[![Datree](https://s3.amazonaws.com/catalog.static.datree.io/datree-badge-20px.svg)](https://datree.io/?src=badge)
[![GitHub contributors](https://img.shields.io/github/contributors/code4romania/seismic-risc.svg)](https://github.com/code4romania/seismic-risc/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/code4romania/seismic-risc.svg)](https://github.com/code4romania/seismic-risc/commits/develop)
[![License: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![code for romania twitter][1.1]][1]
[![code for romania facebook][2.1]][2]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png "twitter icon with padding"
[2.1]: http://i.imgur.com/P3YfQoD.png "facebook icon with padding"
[1]: https://twitter.com/Code4Romania
[2]: https://www.facebook.com/code4romania/

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

:romania: Un cutremur în București nu este o situație ipotetică.
Este o certitudine că acest lucru se va întâmpla.
În acest context, la mai bine de 40 de ani de la cutremurul din 1977, memoria colectivă a ascuns în profunzime amintirile acelui dezastru în încercarea de a-și înăbuși teama.
Dar realitatea este că, patru decenii mai târziu, Bucureștiul, la fel ca restul orașelor cu risc seismic ridicat, nu ar face față unui asemenea eveniment, iar pierderile de vieți omenești ar fi uriașe.
[Exercițiul Seism 2018](https://www.news.ro/social/exercitiul-seism-2018-cel-mai-recent-bilant-al-cutremurului-simulat-indica-peste-3-900-de-morti-peste-7-000-de-raniti-si-peste-2-300-de-persoane-disparute-1922405315222018102018579831) derulat de DSU arată că cel puţin 4.587 persoane şi-ar pierde viaţa, iar 8.585 ar fost rănite, 6 spitale vor fi distruse, 23 de unităţi spitaliceşti distruse parţial, iar 9 avariate, dar funcţionale.
O estimare, am spune noi, destul de optimistă.

Ce putem face pentru a deveni mai puțin vulnerabili?
Să știm totul despre oraș, despre clădirile în care locuim astfel încât să putem cere consolidarea lor.
Seismic Risc nu este doar "un nou site de informare", ci o platformă care colectează și validează apoi cu experți date despre clădirile din România, la nivel național, ajută asociațiile de proprietari să își consolideze clădirile, te ține la curent cu legislația și ți-o explică și are grijă să ai la îndemână informații utile la orice moment.

:gb: An earthquake in Bucharest is not a hypothetical situation.
It is certain that this will happen.
In this context, after more than 40 years from the 1977 earthquake, the collective memory has hidden deep the memories of that disaster in its attempt of stifling its fear.
The reality is that, four decades later, Bucharest, as well as the rest of the cities with a high seismic risk, would not stand up tu such an event, and the loss of life would be tremendous.
[The Earthquake 2018 Exercise](https://www.romania-insider.com/seism-2018-exercise-bucharest) conducted by the DSU shows that at least 4,587 people would have died and 8,585 would have been injured, 6 hospitals would be destroyed, 23 more would be partially destroyed, and 9 would be damaged, though still functional.
An estimation that we would consider quite optimistic.

What can we do to become less vulnerable?
Find out everything about the city, about the buildings in which we live so that we can ask for their consolidation.
Seismic Risc is not just "a new information site", but a platform that collects and then validates with the help of experts data about the buildings in Romania, at a national level, it helps owners associations to consolidate their buildings, it keeps you in touch with the current legislation and explains it to you, and it makes sure that you have useful information at your disposal at all times.

**Let's save lives together.**

- [Seismic Risc](#seismic-risc)
  - [Contributing](#contributing)
  - [Built With](#built-with)
    - [Programming languages](#programming-languages)
    - [Frameworks](#frameworks)
    - [Package managers](#package-managers)
    - [Code styling](#code-styling)
    - [Database technology & provider](#database-technology--provider)
  - [Getting started](#getting-started)
    - [Pre-requisites](#pre-requisites)
    - [Initial set-up](#initial-set-up)
    - [Starting the project](#starting-the-project)
    - [Development](#development)
    - [Known Issues](#known-issues)
      - [Client hot-reload on Windows Docker is not working](#client-hot-reload-on-windows-docker-is-not-working)
      - [In VS Code, ESLint fails to load the Prettier plugin](#in-vs-code-eslint-fails-to-load-the-prettier-plugin)
  - [Management Commands](#management-commands)
  - [Testing](#testing)
  - [Production](#production)
  - [Client Deployment](#client-deployment)
  - [Feedback](#feedback)
  - [License](#license)
  - [About Code4Ro](#about-code4ro)

## Contributing

If you would like to contribute to one of our repositories, first identify the scale of what you would like to contribute. If it is small (grammar/spelling, or a bug fix) feel free to start working on a fix. If you are submitting a feature or substantial code contribution, please discuss it with the team and ensure it follows the product roadmap.

Our collaboration model [is described here](https://github.com/code4romania/.github/blob/main/CONTRIBUTING.md). **And make sure you check the [workflow document](https://github.com/code4romania/.github/blob/main/WORKFLOW.md)**; it helps you keep your environment in a good shape, and it helps everyone move faster with code reviews. If you want to make any change to this repository, please **make a fork first**.

We don't have a specific set of coding guidelines, so just follow the way the code was written until now, if in doubt, you can use [Google's style guide](http://google.github.io/styleguide/pyguide.html).

## Built With

### Programming languages

[Python 3](https://www.python.org)
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Frameworks

**API:** [Django](https://www.djangoproject.com)
**Client:** [React](https://reactjs.org/)

### Package managers

**API:** [pip](https://pypi.org/)
**Client:** [npm](https://www.npmjs.com/)

### Code styling

**API:** [Black](https://black.readthedocs.io/en/stable/)
**Client:** [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Airbnb style guide](https://github.com/airbnb/javascript)

### Database technology & provider

[PostgreSQL](https://www.postgresql.org)

## Getting started

Risc Seismic API is a Django application, built on top of Python 3.7+ with a PostgreSQL database, while the Client is a React single page application.

### Pre-requisites

In order to run the project locally, you need to have [Docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/overview/) installed.

You can install the above mentioned packages manually, or you can use our helper commands.

On `Ubuntu 18.04+` run:

```shell script
make install-docker-ubuntu
```

On `MacOS` run:

```shell script
make install-docker-osx
```

On other platforms please follow the instructions described here:

- <https://docs.docker.com/install/>
- <https://docs.docker.com/compose/install/>

The versions the Makefile was tested with are:

```shell script
$ docker --version
Docker version 19.03.5, build 633a0ea
$ docker-compose --version
docker-compose version 1.24.1, build 4667896b
```

### Initial set-up

Initialise the database and development fixtures:

```shell script
make init-env
```

### Starting the project

First check the `.env` file created by the init command and see if there are any environment variables that you might need to provide or change. This file is used by `docker-compose` to pass the environment variables to the container it creates.

Get the project up and running:

```shell script
docker-compose up
```

You should be able to access the local environment site and admin at the following URLs:

- <http://localhost:8000/api/v1/>
- <http://localhost:8000/admin/>

If you have problems starting the project, first check out the [FAQ](https://github.com/code4romania/seismic-risc/wiki/FAQ) and if that doesn't work, ask someone from the project's channel.
Maybe the issue you just had is worth adding to the [FAQ](https://github.com/code4romania/seismic-risc/wiki/FAQ), wouldn't it?

To work on running containers that were started using `docker-compose up`, open another terminal and:

```shell script
cd path/to/repo
docker-compose exec api bash
# or
docker-compose exec client bash
```

In order to see all available commands run:

```shell script
make
```

### Starting the project without docker

#### Windows platform
##### Prerequisites
1. [PostgreSQL](https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=55)
2. [Python 3.7](https://www.python.org/ftp/python/3.7.9/python-3.7.9-amd64.exe)
3. [Node.js](https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi)

##### Steps to set your environment
1. In project directory run: 

```shell
python -m venv .venv
.venv\Scripts\activate.bat
pip install -r ./api/requirements-dev.txt
copy .env.dist .env
```
2. Check the .env file created by the copy command and see if there are any environment variables that you might need to provide or change. Double check database config line in .env. It has to follow this pattern: `postgres://USER:PASSWORD@HOST:PORT/NAME`

3. Run following in order to set needed environment variables:
```shell
activate_dev_env.bat
```

4. Check database connection. If this fails double check database configuration.
```shell
python api/wait_for_db.py
```

5. Run migrations:
```shell
python api/manage.py migrate --noinput
```

6. Create admin user (user to login into admin pannel):
```shell
python api/manage.py createsuperuser
```

7. Load dummy data in database:
```shell
python api/manage.py loaddata buildings
python api/manage.py loaddata pages
```

8. Install node modules.
```shell
cd client
npm install
```
#### Steps needed to start development servers
*1. Start API server.*

Open terminal in project direcotry and run environment activation script, then
start the server.
```shell
.venv\Scripts\activate.bat
activate_dev_env.bat
python api\manage.py runserver 0.0.0.0:8000
```
Check functionality at http://localhost:8000 you shoul get 404 page.


*2. Start front-end server.*

Open terminal in project direcotry and run environment activation script, then
start the server.
```shell
activate_dev_env.bat
cd client
npm start
```
Check functionality at http://localhost:3000.

### Development

When creating new models in Django, in order to make sure they are generated in a clean environment, it is recommended to generate the migration files using the `make` command:

```shell script
make migrations
```

When you need to add/remove requirements or restrict the version of a requirement, edit the `requirements.in` (prod) and the `requirements-dev.in` (dev) files accordingly. After doing this run:

```shell script
make update-requirements
```

This will create a clean environment where it uses the [pip-tools](https://github.com/jazzband/pip-tools/) library to compile the corresponding `requirements.txt` files with the versions of the packages pinned. This is important as it guarantees that every environment this service runs in, has the same dependencies installed and minimizes the risk of `works on my machine`.

### Known Issues

#### Client hot-reload on Windows Docker is not working

Try following these steps:

1. open up a terminal in **seismic-risc_client** container
2. `cd ./node_modules/react-scripts/config/`
3. `vi webpackDevServer.config.js`
4. on the exported config object, update the value of `watchOptions` to include the following properties:

    ```shell script
    aggregateTimeout: 100,
    poll: 500
    ```

5. save the file and restart the client container

This way, webpack-dev-server should be watching files in polling mode, instead of listening for file change events.

#### In VS Code, ESLint fails to load the Prettier plugin

Add the following option to user settings in VS Code if ESLint fails to load the Prettier plugin.

```json
{
  "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ]
}
```

## Management Commands

The new custom command can be called using
`python manage.py buildings <number>`
required arguments:

- --delete
- --create

```shell script
cd path/to/repo
docker-compose exec api bash
root@ba4fd81f9023:/code# python manage.py buildings 30 --create
100% |███████████████████████████████████████████████████████████████████████████████████████████████████████████████| 30/30 [00:00<00:00, 37.89it/s]
Successfully created 30 buildings.
root@ba4fd81f9023:/code# python manage.py buildings 25 --delete
Successfully deleted 25 buildings.
```

## Testing

Local development testing:

```shell script
cd path/to/repo
docker-compose exec api bash
root@3c5df91778ad:/code# pytest
```

Pipeline testing:

```shell script
make test
```

## Production

In order to get the container ready for production use we need to first build it:

```shell script
docker build -t seismic-risc:latest ./api
```

Use the `prod.env.dist` template file and create a `prod.env` file with the correct environment variables and run like so:

```shell script
docker run --env-file prod.env -p HOST_PORT:GUNICORN_PORT seismic-risc:latest
```

Or, you can provide all the environment variables at runtime:

```shell script
docker run -e DJANGO_CONFIGURATION=Prod -e DJANGO_SECRET_KEY= -e DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/NAME -e GUNICORN_PORT=5000 -e GUNICORN_WORKERS=2 -p HOST_PORT:GUNICORN_PORT seismic-risc:latest
```

After testing the container runs properly, tag and upload the image to Docker hub:

```shell script
docker tag seismic-risc:latest code4romania/seismic-risc:latest
docker push code4romania/seismic-risc:latest
```

## Client Deployment

- Change directory to `./client`
- Build the solution `npm install`
- Start a development server `npm start`
- Run the tests `npm test`
- Build the solution `npm run build`

## Feedback

- Request a new feature on GitHub.
- Vote for popular feature requests.
- File a bug in GitHub Issues.
- Email us with other feedback contact@code4.ro

## License

This project is licensed under the MPL 2.0 License - see the [LICENSE](LICENSE) file for details

## About Code4Ro

Started in 2016, Code for Romania is a civic tech NGO, official member of the Code for All network. We have a community of over 500 volunteers (developers, ux/ui, communications, data scientists, graphic designers, devops, IT security and more) who work pro-bono for developing digital solutions to solve social problems. #techforsocialgood. If you want to learn more details about our projects [visit our site](https://www.code4.ro/en/) or if you want to talk to one of our staff members, please e-mail us at contact@code4.ro.

Last, but not least, we rely on donations to ensure the infrastructure, logistics and management of our community that is widely spread across 11 timezones, coding for social change to make Romania and the world a better place. If you want to support us, [you can do it here](https://code4.ro/en/donate/).
