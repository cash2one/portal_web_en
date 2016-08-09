for i in `ps -ef|grep common_project.wsgi|grep -v grep|awk '{print $2}'`
do
kill -9 $i
done
