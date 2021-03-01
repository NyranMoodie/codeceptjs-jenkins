node {

    def imageTag = "peterngtr/rest-demo:${env.BUILD_NUMBER}"
    def dockerHome = tool 'myDocker'

    stage("Initializing") {
        cleanWs();
        checkout scm;
        sh 'git reset --hard'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage("Building Images") {
        sh "docker build -t ${imageTag} -f Dockerfile ."
    }

    stage("Running Tests") {
        try {
            sh "
            
            
VERSION=${1:-latest}

echo "Pulling image ${VERSION}"
mkdir report

docker run --rm \
    -v "$(pwd)"/report/:/app/report/ \
    peterngtr/rest-demo:${VERSION}

status=$?

echo "Final status ${status}"
exit ${status}

            "
        }
        finally {
            sh "ls report/"
            allure includeProperties: false, jdk: '', results: [[path: 'report']]
        }
    }


}
