import type { PublicationItem } from './types';

export const publications: PublicationItem[] = [
  {
    authorshipRole: 'First Author',
    title: 'A Framework for Casualty Manipulation with Biomechanical Joint-Level Reaction Analysis',
    venue: '2024 IEEE International Symposium on Safety, Security, and Rescue Robotics (SSRR)',
    year: '2024',
    doi: '10.1109/SSRR62954.2024.10770062',
    summary:
      'Introduces a simulation framework combining Gazebo interaction physics with OpenSim biomechanical joint-level analysis for casualty manipulation and safer human-robot interaction.'
  },
  {
    authorshipRole: 'Co-Author',
    title:
      'Towards a Multifidelity Digital Human Model for Use in Simulation Environments for Tactile Human/Robot Interactions',
    venue: 'Military Medicine',
    year: 'TODO',
    doi: '10.1093/milmed/usaf086',
    summary:
      'Describes a multifidelity digital human model integrating multibody dynamics and finite element simulation for tactile human-robot interaction and casualty rescue scenarios.'
  }
];
