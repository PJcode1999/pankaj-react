
          
const Skills = ({skill}) => {
    const icon = {
		Vercel: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt='Vercel'/>,
		Python: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='Python'/>,
		Postman:<img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Postman'/>,
		Git: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git'/>,
		Github: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github'/>,
		Gitlab: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt='Gitlab'/>,
		Bootstrap: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt='Bootstrap'/>,
		Html: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='Html'/>,
		Django: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django"/>,
		DRF: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original-wordmark.svg" alt="DRF"/>,
		FastAPI: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI"/>,
		Flask: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask"/>,
		Socketio: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" alt="Socketio" />,
		PyQT: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" alt="QT"/>,
		Postgresql: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt='Postgresql'/>,
		MongoDb: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt='MongoDb'/>,
		Mysql: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="Mysql"/>,
		DBeaver: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" alt="DBeaver" />,
		SQLite: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" />,
		ElasticSearch: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" alt="ElasticSearch" />,
		Cassandra: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg" alt="Cassandra" />,
		VScode: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VScode"/>,
		Docker: <img className='skill-icon'  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />,
		JavaScript : <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />,
		SQLAlchemy: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" alt="SQLAlchemy" />,
		CSS: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />,
		Linux: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" />,
		Windows: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" alt="Windows" />,
		Kubernetes: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" />,
		Redis: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="redis" />,
		// ChatGPT: <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="ChatGPT" />,
		      
          
      }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
