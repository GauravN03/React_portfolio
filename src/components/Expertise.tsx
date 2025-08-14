import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Modeling",
    "Statistical Analysis",
    "Data Cleaning",
    "Model Fine-tuning",
    "Performance Tuning",
    "Hyperparameter Optimization"
];

const labelsSecond = [
    "Artifical Neural Networks",
    "Convolutional Neural Networks",
    "Generative Adversarial Networks",
    "Transformer Models",
    "Recurrent Neural Networks",
    "Git",
    "Docker",
    "AWS",
    "Kubernetes",
    "Jenkins"
];

const labelsThird = [
    "Colab",
    "Visual Studio Code",
    "LangChain",
    "N8N",
    "Hugging Face",
    "Make.com",
    "OpenAI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Machine Learning Skills</h3>
                    <p> I have developed and deployed a variety of AIML solutions, including predictive models, data pipelines, and intelligent applications using frameworks such as TensorFlow, PyTorch, and Scikit-learn. My expertise covers the entire machine learning lifecycle, from data preprocessing and model training to evaluation, deployment, and monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Deep Learning & Model Deployment</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Automation Tools & Frameworks</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;