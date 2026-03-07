import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Robotics and Controls',
    items: [
      'Engineering Mathematics',
      'Motion Planning',
      'Kinematics',
      'Dynamics',
      'Control',
      'Machine Learning / Deep Learning',
      'Computer Vision'
    ]
  },
  {
    category: 'Simulation and AI',
    items: [
      'ROS / ROS2',
      'Gazebo Classic / Ignition',
      'RViz',
      'OpenSim',
      'Scikit-learn',
      'OpenCV',
      'Keras',
      'TensorFlow'
    ]
  },
  {
    category: 'Programming',
    items: ['Python', 'MATLAB', 'Java', 'Bash', 'C++']
  },
  {
    category: 'CAD and Engineering Tools',
    items: ['SolidWorks', 'MeshMixer', 'Simulink', 'Simscape']
  },
  {
    category: 'Hardware and Prototyping',
    items: [
      'Kinova Gen3',
      'Franka Emika Panda',
      'Clearpath Husky',
      '3D Printing',
      'Depth Cameras',
      'Raspberry Pi',
      'Arduino',
      'Oscilloscope',
      'Spectrum Analyzer',
      'Digital Multimeter'
    ]
  },
  {
    category: 'Platforms and Software',
    items: ['Git', 'GitHub', 'Bitbucket', 'Microsoft Office', 'Ubuntu', 'Windows', 'macOS', 'Arena Simulation Software']
  },
  {
    category: 'Languages',
    items: ['English (Fluent)', 'Filipino (Native)', 'Japanese (Basic)']
  }
];
