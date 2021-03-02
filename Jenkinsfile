node {

    def imageTag = "atools/chrome-headless:${env.BUILD_NUMBER}"
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
            sh "trigger-tests.sh ${env.BUILD_NUMBER}"
            // sh "docker run --rm atools/chrome-headless:${env.BUILD_NUMBER}"
            // sh "npm run generate-report"
        }
        finally {
            sh "ls report/"
            allure includeProperties: false, jdk: '', results: [[path: 'report']]
        }
    }


}
