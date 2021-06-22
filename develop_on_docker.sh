echo "DELETING APP VOLUME"
docker rm -v emails-app

echo "RUNNING FRESH CONTAINERS"
docker-compose -f docker-compose.dev.yml up --build