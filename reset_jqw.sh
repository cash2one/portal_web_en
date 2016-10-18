cd /data/wwwroot/apps.com
source bin/activate
ps -ef | grep ypqproj | grep -v grep | awk '{print $2}' | xargs kill -9
cd juqiwang 
gunicorn --config gunicorn.conf ypqproj.wsgi:application --daemon
