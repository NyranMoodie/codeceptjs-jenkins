pipeline {
    agent {
        docker { image 'atools/chrome-headless:java8-node12-latest' }
    }
    stages {
        stage('Tesxt') {
            steps {
                sh 'node -v'
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}