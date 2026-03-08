export interface AcademicProjectMedia {
  src: string;
  alt: string;
  caption: string;
}

export interface AcademicProjectVideo {
  src: string;
  poster?: string;
  caption: string;
}

export interface AcademicProjectComparisonVideo {
  label: string;
  src: string;
  poster?: string;
  caption: string;
  playbackRate?: number;
}

export interface AcademicProjectFact {
  label: string;
  value: string;
}

export interface AcademicProject {
  slug: string;
  title: string;
  institution: string;
  course: string;
  year: string;
  hubIntro: string;
  hubImage: AcademicProjectMedia;
  pdfUrl: string;
  sourceCodeUrl?: string;
  video?: AcademicProjectVideo;
  comparisonVideos?: AcademicProjectComparisonVideo[];
  quickFacts: AcademicProjectFact[];
  keyContributions: string[];
  background: string[];
  problem: string[];
  objectives: string[];
  methodology: string[];
  bodyOfWork: string[];
  results: string[];
  discussion: string[];
  conclusion: string[];
  gallery: AcademicProjectMedia[];
}

export interface LostDocumentationProject {
  title: string;
  institution: string;
  course: string;
  year: string;
  details: string[];
}

export const funAcademicProjects: AcademicProject[] = [
  {
    slug: 'inverse-kinematics-4dof-newton-vs-geometric',
    title:
      'The Inverse Kinematics of a 4-DOF RRRR Manipulator in 3D Space via Newton\'s Method: A Comparison to the Geometric Approach',
    institution: 'Stevens Institute of Technology, New Jersey, USA',
    course: 'ME594 - Numerical Methods in Mechanical Engineering',
    year: '2021',
    hubIntro:
      'Implemented a Newton-based inverse kinematics solver for a 4-DOF RRRR manipulator in 3D and compared it against geometric IK. The work focused on practical tradeoffs among solver generality, convergence behavior, and runtime, while also demonstrating how one numerical workflow can support multiple configurations without repeated symbolic re-derivation.',
    hubImage: {
      src: '/assets/academic-projects/images/ik/ik-038.png',
      alt: 'Inverse Kinematics Using Newton method screenshot with isometric, XY, YZ, and XZ panels',
      caption: 'Multi-view manipulator result (isometric, XY, YZ, XZ).'
    },
    pdfUrl: '/assets/academic-projects/docs/inverse-kinematics-4dof.pdf',
    sourceCodeUrl: '/assets/academic-projects/source/inverse-kinematics-4dof-source.zip',
    quickFacts: [
      { label: 'DOF / Joint Type', value: '4-DOF, RRRR manipulator in 3D' },
      { label: 'Core Method', value: 'Newton iteration with Jacobian pseudoinverse (pinv)' },
      { label: 'Baseline Comparator', value: 'Analytic geometric inverse kinematics' },
      { label: 'Reported Runtime', value: 'Numerical avg ~26.654 ms vs geometric avg ~1.706 ms' },
      { label: 'Main Software', value: 'MATLAB' }
    ],
    keyContributions: [
      'Built a generalized inverse-kinematics workflow from one DH-based equation system instead of deriving separate closed forms per configuration.',
      'Demonstrated practical convergence to valid joint solutions for multiple manipulator configurations by varying initialization.',
      'Quantified speed-vs-generality tradeoff through runtime, iteration-count, and error comparisons with a geometric baseline.'
    ],
    background: [
      'Inverse kinematics maps endpoint targets to joint variables and is foundational for robotic motion planning and control.',
      'Geometric IK is often computationally fast but can become case-heavy when multiple manipulator configurations must be handled.',
      'For higher-dimensional or configuration-flexible cases, numerical IK can reduce symbolic derivation effort and improve maintainability.'
    ],
    problem: [
      'The 4-DOF manipulator can realize a target endpoint with multiple valid joint configurations; geometric methods commonly require explicit branch handling for each form.',
      'The project asks whether one Newton-based solver can provide a practical generalized IK workflow while retaining acceptable runtime.',
      'A key risk identified in the report is initialization sensitivity, which influences convergence quality, speed, and consistency.'
    ],
    objectives: [
      'Derive forward kinematics via Denavit-Hartenberg (DH) convention for the 4R manipulator and formulate a Newton-compatible inverse model.',
      'Use Moore-Penrose pseudoinverse to handle non-square Jacobian inversion in the iterative update loop.',
      'Compare numerical IK and geometric IK in terms of adaptability, runtime behavior, and implementation burden.',
      'Relate observed computation latency to practical robotics response-time context discussed in the report.'
    ],
    methodology: [
      'Established reference frames and DH table, then generated endpoint equations for x-y-z workspace mapping.',
      'Computed translational Jacobian and applied pseudoinverse-based updates inside iterative Newton loops.',
      'Executed repeated trials across different initial guesses and target states; tracked absolute error, runtime, and iteration count.',
      'Benchmarked against a geometric implementation to quantify differences in derivation complexity and computational performance.'
    ],
    bodyOfWork: [
      'Implemented MATLAB scripts for kinematic solving, runtime instrumentation, and multi-view visualization (isometric, XY, YZ, XZ).',
      'Structured experiments to observe solver behavior under varied initialization and to identify convergence-rate dispersion.',
      'Analyzed non-square Jacobian handling and documented why pseudoinverse is required for this underdetermined setup.',
      'Included code-level workflow and iterative solver references in the report appendix for reproducibility.'
    ],
    results: [
      'The Newton method converged to valid solutions and supported multiple reachable configurations using one generalized equation system.',
      'Reported numerical average runtime (~26.654 ms) was slower than geometric average runtime (~1.706 ms) but remained practically low in context.',
      'Iteration count variability was significant and strongly coupled to initialization, reinforcing the need for smarter seed selection.',
      'The generalized numerical model reduced derivation overhead compared with manually maintaining multiple geometric branches.'
    ],
    discussion: [
      'Geometric IK remains strong when topology is fixed and closed-form branches are manageable.',
      'Numerical IK is attractive when flexibility and maintainability are prioritized, especially for workflows that may scale in complexity.',
      'A principal engineering lever is initial-guess policy; better initialization can reduce iteration count and stabilize runtime.',
      'The findings align with a practical principle: use geometric IK for speed-critical fixed forms, and numerical IK for adaptable generalized pipelines.'
    ],
    conclusion: [
      'The project validated Newton-based inverse kinematics as a viable generalized solution path for a 4-DOF 3D manipulator.',
      'Compared to geometric IK, numerical IK trades raw speed for broader configurational adaptability and lower symbolic-maintenance burden.',
      'Future gains are likely in initialization strategy and convergence-conditioning techniques rather than in core formulation changes alone.'
    ],
    gallery: [
      {
        src: '/assets/academic-projects/images/ik/ik-038.png',
        alt: 'Inverse Kinematics using Newton method figure with four plot views',
        caption: 'Primary result figure showing the Newton-method solution in four coordinated views.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-000.png',
        alt: 'Manipulator model used in the inverse kinematics study',
        caption: 'Manipulator model and coordinate framing context.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-008.png',
        alt: 'Configuration illustration from report',
        caption: 'Configuration-dependent interpretation used in method comparison.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-014.png',
        alt: 'Numerical output visualization from inverse kinematics report',
        caption: 'Representative solver output during validation runs.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-018.png',
        alt: 'Additional manipulator plot from inverse kinematics report',
        caption: 'Additional plot used for qualitative correctness checks.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-030.png',
        alt: 'Runtime and iteration figure from inverse kinematics report',
        caption: 'Result panel used in runtime and convergence analysis.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-042.png',
        alt: 'Performance analysis figure from inverse kinematics report',
        caption: 'Performance figure supporting numerical-versus-geometric comparison.'
      },
      {
        src: '/assets/academic-projects/images/ik/ik-044.png',
        alt: 'Alternative screenshot of Newton method visualization',
        caption: 'Alternate full-window snapshot of the same Newton-method plotting workflow.'
      }
    ]
  },
  {
    slug: 'obstacle-avoidance-8dof-tprr-vs-apf',
    title:
      'Obstacle Avoidance for an 8-DOF 8R Manipulator in 2D Space via Task Priority Redundancy Resolution and Artificial Potential Field Methods',
    institution: 'Stevens Institute of Technology, New Jersey, USA',
    course: 'ME650 - Robot Manipulators',
    year: '2022',
    hubIntro:
      'Implemented Artificial Potential Field (APF) and Task Priority Redundancy Resolution (TPRR) on an arbitrary 8-DOF manipulator and compared their behavior under the same simulation conditions. The project emphasized convergence reliability, obstacle-clearance control, and parameter-tuning effort to evaluate which method is more practical for robust engineering use.',
    hubImage: {
      src: '/assets/academic-projects/images/obstacle/obstacle-000.png',
      alt: '8-DOF manipulator obstacle avoidance simulation output',
      caption: 'Simulation snapshot from APF vs TPRR comparison.'
    },
    pdfUrl: '/assets/academic-projects/docs/obstacle-avoidance-8dof.pdf',
    sourceCodeUrl: '/assets/academic-projects/source/obstacle-avoidance-8dof-source.zip',
    video: {
      src: '/assets/academic-projects/media/obstacle-avoidance-8dof-demo.mp4',
      poster: '/assets/academic-projects/images/obstacle/obstacle-000.png',
      caption: 'Simulation video of the 8-DOF obstacle-avoidance implementation.'
    },
    comparisonVideos: [
      {
        label: 'Artificial Potential Field (APF)',
        src: '/assets/academic-projects/media/apf-method-demo.mp4',
        poster: '/assets/academic-projects/images/obstacle/obstacle-000.png',
        caption: 'APF trial video for obstacle avoidance behavior.',
        playbackRate: 3
      },
      {
        label: 'Task Priority Redundancy Resolution (TPRR)',
        src: '/assets/academic-projects/media/tprr-method-demo.mp4',
        poster: '/assets/academic-projects/images/obstacle/obstacle-001.png',
        caption: 'TPRR trial video for obstacle avoidance behavior.',
        playbackRate: 2
      }
    ],
    quickFacts: [
      { label: 'Manipulator', value: '8-DOF 8R planar manipulator' },
      { label: 'Algorithms Compared', value: 'TPRR vs APF' },
      { label: 'Primary Target', value: 'Collision-free end-effector convergence to goal' },
      { label: 'Noted Outcome', value: 'TPRR easier to tune; APF stronger distance stability' },
      { label: 'Main Software', value: 'MATLAB' }
    ],
    keyContributions: [
      'Implemented two canonical obstacle-avoidance paradigms in a shared experimental setup for direct behavioral comparison.',
      'Exposed parameter-tuning tradeoffs explicitly, including convergence reliability, convergence time, and obstacle-distance behavior.',
      'Documented practical risks such as APF overshoot/non-convergence cases and TPRR sensitivity near singularities.'
    ],
    background: [
      'Obstacle avoidance is mandatory for safe manipulator operation in constrained or shared spaces.',
      'APF is intuitive and popular in coursework due to force-field interpretation, but can be difficult to tune robustly across conditions.',
      'TPRR provides objective hierarchy handling and can use redundancy to satisfy secondary constraints while meeting primary goals.'
    ],
    problem: [
      'Redundant manipulators can satisfy endpoint goals in many ways, making obstacle-safe trajectory selection highly sensitive to control parameters.',
      'The project investigates which method offers better practical tuning behavior while preserving goal convergence and obstacle avoidance.',
      'The comparison focuses not only on correctness, but on calibration workload and reliability under iterative experimentation.'
    ],
    objectives: [
      'Implement APF and TPRR for the same 8-DOF kinematic system and obstacle-goal scenario.',
      'Measure convergence behavior and assess tradeoffs among accuracy, convergence time, and obstacle distance.',
      'Identify tuning characteristics that matter in real engineering workflows, including failure modes.'
    ],
    methodology: [
      'Derived manipulator kinematics and required Jacobians under a consistent model (equal link lengths, point obstacle assumption).',
      'For TPRR, solved primary end-effector task and secondary obstacle-avoidance task using prioritized redundancy formulation.',
      'For APF, constructed attractive and repulsive potentials and converted resulting forces into joint-space torque/velocity action through Jacobian mappings.',
      'Executed trial sweeps over gains and thresholds; recorded convergence status, distance-to-obstacle behavior, and timing tendencies.'
    ],
    bodyOfWork: [
      'Developed simulation scripts that animate arm motion, endpoint trajectory, and obstacle relation in 2D workspace.',
      'Instrumented output tables for trial-by-trial parameter analysis and qualitative result comparison.',
      'Examined how parameters such as influence magnitudes and tolerances shift stability and convergence behavior.',
      'Reviewed singularity-related effects in TPRR and overshoot-driven non-convergence modes in APF.'
    ],
    results: [
      'Both methods achieved collision-aware goal-reaching behavior in tested scenarios.',
      'TPRR demonstrated a higher practical ease of tuning and more predictable convergence adjustment than APF.',
      'APF showed strong tendency to maintain obstacle distance but required greater care to avoid overshoot and non-convergent settings.',
      'The report highlighted that when APF is tuned for higher accuracy, convergence time can degrade significantly.'
    ],
    discussion: [
      'TPRR is attractive when fast tuning iteration and controlled objective prioritization are important.',
      'APF remains conceptually simple and useful, but parameter interactions can complicate stable high-accuracy operation.',
      'A nuanced takeaway is that the "better" method depends on deployment priorities: tuning simplicity vs strict distance behavior vs singularity resilience.',
      'The work emphasizes that practical algorithm selection should include calibration effort and failure behavior, not just nominal path quality.'
    ],
    conclusion: [
      'The comparison validated both APF and TPRR as viable approaches for redundant manipulator obstacle avoidance.',
      'TPRR emerged as the more practical option in this study due to easier parameterization and convergence control.',
      'APF remains valuable but can require more careful tuning to avoid overshoot and maintain robust convergence under stricter goals.'
    ],
    gallery: [
      {
        src: '/assets/academic-projects/images/obstacle/obstacle-000.png',
        alt: 'Obstacle avoidance simulation frame one',
        caption: 'Manipulator trajectory with obstacle and goal references.'
      },
      {
        src: '/assets/academic-projects/images/obstacle/obstacle-001.png',
        alt: 'Obstacle avoidance simulation frame two',
        caption: 'Additional frame illustrating APF/TPRR behavior under tested conditions.'
      }
    ]
  },
  {
    slug: 'grass-level-monitor-cloud-iot-image-processing',
    title: 'Grass Level Monitor via Image Processing Using Python',
    institution: 'International College of Auckland, Auckland, New Zealand',
    course: 'DEE700 - Final Project',
    year: '2018',
    hubIntro:
      'Designed and implemented a cloud-connected IoT monitoring system that classifies grass condition from camera data and provides remote mowing-readiness visibility through AWS services and a Python frontend. The project integrated edge sensing, cellular/cloud communication, data persistence, and operator-facing status visualization into a complete end-to-end workflow.',
    hubImage: {
      src: '/assets/academic-projects/images/grass/grass-017.png',
      alt: 'Grass Level Monitor V1.0 user interface with refresh and trigger controls',
      caption: 'Operator dashboard with DeviceID, location, update time, and status.'
    },
    pdfUrl: '/assets/academic-projects/docs/grass-level-monitor.pdf',
    sourceCodeUrl: '/assets/academic-projects/source/grass-level-monitor-source.zip',
    quickFacts: [
      { label: 'Project Type', value: 'Cloud-based IoT monitoring system' },
      { label: 'Delivery Window', value: '20-week capstone implementation timeline' },
      { label: 'Edge Device', value: 'Raspberry Pi Zero W + Camera Module V2 + GSM module' },
      { label: 'Cloud Stack', value: 'AWS IoT, DynamoDB, IAM, API Gateway, SNS' },
      { label: 'Languages / Tools', value: 'Python, Raspbian, Twilio-enabled messaging flow' }
    ],
    keyContributions: [
      'Built an end-to-end sensing-to-cloud-to-dashboard workflow for remote grass-level classification and status monitoring.',
      'Integrated cellular transport and AWS data services to reduce field inspection dependency and use existing infrastructure.',
      'Delivered a functioning operator UI with refresh/trigger controls, location-level status rows, and cloud-backed update visibility.'
    ],
    background: [
      'Urban field and berm maintenance can require repeated manual site visits that consume personnel time and operational budget.',
      'The project was motivated by a practical municipal-style need: remotely determine when grass reaches mowing thresholds.',
      'A major design principle was to leverage available network and cloud infrastructure rather than deploy bespoke communications hardware.'
    ],
    problem: [
      'Manual site inspection does not scale efficiently when many sites must be monitored frequently.',
      'The technical challenge was to automate full decision flow: capture image, infer condition, transmit data, store cloud records, and present actionable status to users.',
      'Reliability and practical deployment constraints required balancing edge capability, network limitations, and cloud integration complexity.'
    ],
    objectives: [
      'Develop a remotely connected edge device that detects grass condition using camera input and Python processing logic.',
      'Connect the device to cloud infrastructure through cellular/GPRS transport and IoT messaging.',
      'Persist status data in a queryable backend and expose it through a frontend-friendly API pathway.',
      'Provide operational visibility through a readable dashboard interface suitable for maintenance decision support.'
    ],
    methodology: [
      'Architected the system in phases: concept/design, material and technical preparation, implementation/troubleshooting, and final documentation.',
      'Implemented edge capture and processing on Raspberry Pi; integrated GSM module communication for uplink.',
      'Configured AWS IoT certificates/keys and routing rules to ingest and forward messages into DynamoDB.',
      'Configured API Gateway pathways for frontend retrieval and built Python-side UI/data formatting flows.'
    ],
    bodyOfWork: [
      'Built the UI workflow with periodic refresh plus trigger mechanisms, including remotely initiated update behavior.',
      'Mapped each site record by device/location metadata and status fields to support direct operational interpretation.',
      'Handled practical cloud-learning overhead during implementation, including IAM policies, topic routing, and service coordination.',
      'Connected message transport and storage layers end-to-end, then validated readout behavior through dashboard outputs.'
    ],
    results: [
      'Delivered a working remote-monitoring prototype that can classify and display grass readiness state from cloud-backed updates.',
      'Demonstrated that AWS + cellular stack can support the monitoring use case without dedicated custom infrastructure.',
      'Produced a functional frontend with location-wise status presentation and timestamped update visibility.',
      'Established a replicable foundation for extending to production-style municipal monitoring scenarios.'
    ],
    discussion: [
      'Cloud integration was a major learning and implementation challenge, especially while configuring multiple AWS services for coordinated behavior.',
      'The project emphasized full-stack engineering in a single workflow: edge sensing, network transport, cloud persistence, API access, and UI experience.',
      'Using existing infrastructure improved feasibility and highlighted a scalable path for similar environmental monitoring tasks.',
      'Team reflections in the report indicate this project materially strengthened cloud/IoT and systems-integration competencies.'
    ],
    conclusion: [
      'The Grass Level Monitor successfully demonstrated an end-to-end IoT monitoring pipeline using image processing and AWS services.',
      'The system reduced dependence on manual checks and validated a practical architecture for remote maintenance decision support.',
      'The project served as a formative integration milestone combining electronics, software, cloud services, and applied operations context.'
    ],
    gallery: [
      {
        src: '/assets/academic-projects/images/grass/grass-017.png',
        alt: 'Grass Level Monitor UI screenshot',
        caption: 'Requested dashboard view used as primary project figure.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-019.png',
        alt: 'Grass Level Monitor frontend screenshot with status rows',
        caption: 'UI status table and controls for remote field monitoring.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-014.png',
        alt: 'System architecture figure from grass monitor report',
        caption: 'System architecture and service integration view from the report.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-010.png',
        alt: 'Implementation pipeline figure from grass monitor report',
        caption: 'Implementation-level diagram of the edge-to-cloud workflow.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-012.png',
        alt: 'Cloud or API integration figure from report',
        caption: 'Cloud/API integration details supporting frontend data delivery.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-009.png',
        alt: 'Device or platform screenshot from grass monitor report',
        caption: 'Supporting project screenshot documenting practical implementation context.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-018.png',
        alt: 'Additional architecture or test artifact from report',
        caption: 'Additional figure showing design and validation artifacts.'
      },
      {
        src: '/assets/academic-projects/images/grass/grass-011.png',
        alt: 'Grass monitor interface variant',
        caption: 'Alternative UI view from the documentation set.'
      }
    ]
  }
];

export const lostDocumentationProjects: LostDocumentationProject[] = [
  {
    title: 'DC Power Supply',
    institution: 'Mapua Institute of Technology, Manila, Philippines',
    course: 'ECE103L - Electronics 1 Laboratory',
    year: '2010',
    details: [
      'Designed and prototyped a low-power DC supply targeting stable 12V constant output.',
      'Focused on component-level power regulation behavior and practical bench validation.',
      'Strengthened analog electronics fundamentals and hardware troubleshooting discipline.'
    ]
  },
  {
    title: 'AM/FM Radio Receiver',
    institution: 'Mapua Institute of Technology, Manila, Philippines',
    course: 'ECE121L - Principles of Communications Laboratory',
    year: '2009',
    details: [
      'Designed and built an AM/FM receiver prototype capable of tuning local commercial channels in Manila.',
      'Applied RF and communication principles in circuit realization, tuning, and signal verification.',
      'Built practical intuition on front-end reception quality and analog signal conditioning.'
    ]
  },
  {
    title: 'Antenna Receiver for Television (Yagi-Uda)',
    institution: 'Mapua Institute of Technology, Manila, Philippines',
    course: 'ECE123 - Transmission Media and Antenna Systems',
    year: '2010',
    details: [
      'Designed and fabricated an outdoor Yagi-Uda TV antenna for terrestrial analog reception.',
      'Validated multi-channel reception performance (10+ local channels) in real deployment conditions.',
      'Developed hands-on understanding of directional gain, alignment sensitivity, and practical antenna behavior.'
    ]
  },
  {
    title: 'Automatic Size-Sorting Conveyor',
    institution: 'Mapua Institute of Technology, Manila, Philippines',
    course: 'ECE110D - Electronics Design',
    year: '2011',
    details: [
      'Designed and prototyped an analog-controlled size-sorting conveyor using relays, lasers, LDRs, and reversible DC motors.',
      'Implemented sensing-to-actuation logic to classify objects by size and route them through mechanical flow paths.',
      'Designed supporting PCB in Altium, integrating circuit design with physical automation behavior.'
    ]
  },
  {
    title: 'Microwave Telecommunication System Design',
    institution: 'Mapua Institute of Technology, Manila, Philippines',
    course: 'ECE125D - Communications 5 Design',
    year: '2011',
    details: [
      'Developed a theoretical microwave backbone design connecting five base stations across Camarines Norte and Quezon.',
      'Engineered the link budget and planning assumptions toward 99.99% reliability target.',
      'Strengthened systems-level telecom design reasoning under reliability and network-coverage constraints.'
    ]
  }
];
