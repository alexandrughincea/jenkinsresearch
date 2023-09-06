pipeline {
    agent any

    // triggers {
    //     pollSCM '* * * * *'
    // }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Fiori Elements project from version control 
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Building.."
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
        echo "Running OPA5 Tests..."
        script {
            def exitCode = sh(script: 'npm run int-test', returnStatus: true)
            echo "Test Exit Code: ${exitCode}"

            if (exitCode == 1) {
                error "Some OPA5 tests failed!"
            } else {
                 echo "All OPA5 tests passed!"
            }
        }
    }
}
        stage('Deliver') {
            steps {
                echo 'Deliver....'
            }
        }
    }

    post {
        always {
            // Archive test results (if available)
            junit '**/test-results.xml'

            // Determine the build result based on the test results
            script {
                currentBuild.result = currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'SUCCESS' : 'FAILURE'
            }
        }
    }
}
