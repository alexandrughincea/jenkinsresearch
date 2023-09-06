pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out your source code repository (e.g., Git)
                // You can configure credentials and repository URL here
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install any necessary dependencies (e.g., Node.js, npm, SAPUI5 tools)
                sh 'npm install' 
            }
        }

        stage('Run OPA5 Tests') {
            steps {
                // Run your OPA5 integrated tests using SAPUI5's testing tools
                sh 'npm run int-test' 
            }
        }

        stage('Check Test Results') {
            steps {
                // Check the test results and mark the build as unstable or failed if tests fail
                script {
                    def testExitCode = sh(script: 'npm run int-test --silent', returnStatus: true)
                    if (testExitCode != 0) {
                        currentBuild.result = 'FAILURE'
                        error("OPA5 tests failed")
                    }
                }
            }
        }
    }

    post {
        always {
            // Archive test results or do any cleanup here
            junit '**/target/test-results/*.xml'
        }
    }
}
