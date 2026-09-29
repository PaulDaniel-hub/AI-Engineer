import {
  ProfileData,
  SkillCategory,
  ProjectItem,
  ActivityItem,
  JourneyStep,
  CurrentlyLearningItem,
} from '../types/portfolio';

// Generated image assets (clean fallbacks included in components)
import avatarImage from '../assets/images/avatar_student_developer_1790679355095.jpg';
import illustrationAi from '../assets/images/illustration_ai_concepts_1790679371085.jpg';

export const initialProfileData: ProfileData = {
  name: '[YOUR NAME]',
  role: 'AI Student & Aspiring AI Engineer',
  degree: 'B.Tech',
  specialization: 'Artificial Intelligence',
  year: 'First Year',
  tagline: 'First-year B.Tech student specializing in Artificial Intelligence and an aspiring AI Engineer.',
  heroHeadline: 'AI Student & Aspiring AI Engineer',
  heroSupportingText:
    'First-year B.Tech Artificial Intelligence student passionate about Python, web development, and Generative AI. Currently learning, building, experimenting, and turning ideas into practical projects.',
  aboutBio: [
    'I am a first-year B.Tech student specializing in Artificial Intelligence, driven by a deep curiosity about how intelligent systems function and how software can solve tangible everyday problems.',
    'Currently, I am actively building my fundamentals in computer programming and core artificial intelligence concepts. Python is my primary programming language, which I use for algorithmic problem solving and introductory software development.',
    'Alongside AI fundamentals, I am exploring web development to understand how frontend interfaces and software applications are built and structured.',
    'I have also started my journey into Generative AI at a beginner level, exploring foundational models, prompt design, and practical AI tooling.',
    'I love collaborating in hackathons and ideathons, brainstorming innovative technology solutions, and transforming emerging ideas into functional code. My ultimate long-term goal is to grow into an impactful AI Engineer.',
  ],
  email: '[YOUR EMAIL]',
  githubUrl: '[GITHUB URL]',
  linkedinUrl: '[LINKEDIN URL]',
  avatarUrl: avatarImage,
  illustrationUrl: illustrationAi,
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core logic, data structures, and foundational coding',
    skills: [
      { name: 'Python', level: 'Foundational', note: 'Primary programming language for problem solving & scripting' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Structure, presentation, and frontend fundamentals',
    skills: [
      { name: 'HTML', level: 'Foundational', note: 'Semantic page structure & document layout' },
      { name: 'CSS', level: 'Foundational', note: 'Styling, layout systems & responsive box model' },
      { name: 'JavaScript', level: 'Beginner', note: 'Basic DOM manipulation & interactive logic' },
      { name: 'Basic Web Development', level: 'Foundational', note: 'Building static responsive sites & understanding the web' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Theoretical foundations and early exploration of intelligent systems',
    skills: [
      { name: 'Artificial Intelligence Fundamentals', level: 'Beginner', note: 'Core concepts, search strategies & problem formulation' },
      { name: 'Generative AI — Beginner', level: 'Beginner', note: 'Prompting fundamentals, LLM capabilities & basic APIs' },
      { name: 'AI Exploration', level: 'Currently Exploring', note: 'Active study of modern AI research and practical use cases' },
    ],
  },
  {
    id: 'other',
    title: 'Other & Practical Skills',
    description: 'Collaborative development, ideation, and problem solving',
    skills: [
      { name: 'Problem Solving', level: 'Active', note: 'Algorithmic thinking & breaking down complex tasks' },
      { name: 'Hackathons', level: 'Active', note: 'Fast-paced collaborative prototyping under time constraints' },
      { name: 'Ideathons', level: 'Active', note: 'Developing and presenting tech solutions for real-world issues' },
      { name: 'Project Development', level: 'Active', note: 'Structuring simple software solutions from concept to code' },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'voter-eligibility',
    name: 'Voter Eligibility',
    description:
      'A beginner-level Python project that checks whether a person meets the required age criteria for voting.',
    technologies: ['Python'],
    category: 'Python / Beginner Project',
    githubUrl: '[GitHub Repository]',
    hasInteractiveDemo: true,
    demoType: 'voter',
    pythonCode: `# Voter Eligibility Checker
# Language: Python 3
# Demonstrates: Input validation, conditional branching (if/elif/else)

def check_voter_eligibility():
    print("=== Voter Eligibility Checker ===")
    try:
        user_name = input("Enter your full name: ").strip()
        user_age = int(input("Enter your age: "))

        if user_age < 0:
            print("Error: Age cannot be a negative number.")
        elif user_age >= 18:
            print(f"Congratulations, {user_name}! You are eligible to vote.")
        else:
            years_left = 18 - user_age
            print(f"Sorry, {user_name}. You are not eligible to vote yet.")
            print(f"You will be eligible in {years_left} year(s).")
    except ValueError:
        print("Invalid input! Please enter a valid numerical age.")

if __name__ == "__main__":
    check_voter_eligibility()
`,
  },
  {
    id: 'calculator',
    name: 'Calculator',
    description:
      'A simple calculator application designed to perform basic arithmetic operations and strengthen programming fundamentals.',
    technologies: ['Python'],
    category: 'Python / Beginner Project',
    githubUrl: '[GitHub Repository]',
    hasInteractiveDemo: true,
    demoType: 'calculator',
    pythonCode: `# Basic Arithmetic Calculator
# Language: Python 3
# Demonstrates: Functions, arithmetic operators, user-driven menus

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Division by zero is undefined."
    return x / y

def calculator():
    print("=== Simple Python Calculator ===")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")
    
    choice = input("Select an operation (1-4): ").strip()
    if choice in ['1', '2', '3', '4']:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
            
            if choice == '1':
                print(f"Result: {num1} + {num2} = {add(num1, num2)}")
            elif choice == '2':
                print(f"Result: {num1} - {num2} = {subtract(num1, num2)}")
            elif choice == '3':
                print(f"Result: {num1} * {num2} = {multiply(num1, num2)}")
            elif choice == '4':
                print(f"Result: {num1} / {num2} = {divide(num1, num2)}")
        except ValueError:
            print("Error: Please enter valid numeric values.")
    else:
        print("Invalid operation choice.")

if __name__ == "__main__":
    calculator()
`,
  },
  {
    id: 'atm-management',
    name: 'ATM Management System',
    description:
      'A beginner-level ATM management project that demonstrates basic programming concepts such as user interaction, transactions, balance management, and conditional logic.',
    technologies: ['Python'],
    category: 'Python / Management System',
    githubUrl: '[GitHub Repository]',
    hasInteractiveDemo: true,
    demoType: 'atm',
    pythonCode: `# ATM Management System
# Language: Python 3
# Demonstrates: State persistence in memory, loops, conditional transactions

def run_atm():
    balance = 1000.0  # Initial account balance
    pin = "1234"      # Demo PIN
    
    print("=== Welcome to Mini ATM System ===")
    entered_pin = input("Enter your 4-digit PIN: ")
    
    if entered_pin != pin:
        print("Authentication failed! Incorrect PIN.")
        return

    while True:
        print("\\n1. Check Balance")
        print("2. Deposit Funds")
        print("3. Withdraw Cash")
        print("4. Exit")
        
        choice = input("Enter option (1-4): ").strip()
        
        if choice == '1':
            print(f"Current Balance: \${balance:.2f}")
        elif choice == '2':
            amount = float(input("Enter deposit amount: \$"))
            if amount > 0:
                balance += amount
                print(f"Deposit successful. New Balance: \${balance:.2f}")
            else:
                print("Invalid deposit amount.")
        elif choice == '3':
            amount = float(input("Enter withdrawal amount: \$"))
            if amount > balance:
                print("Insufficient balance for this transaction!")
            elif amount <= 0:
                print("Amount must be greater than zero.")
            else:
                balance -= amount
                print(f"Withdrawal successful. Remaining Balance: \${balance:.2f}")
        elif choice == '4':
            print("Thank you for using the ATM. Goodbye!")
            break
        else:
            print("Invalid selection. Try again.")

if __name__ == "__main__":
    run_atm()
`,
  },
  {
    id: 'student-grade-calculator',
    name: 'Student Grade Calculator',
    description:
      'A simple application that calculates student grades based on marks and demonstrates conditional logic and basic data processing.',
    technologies: ['Python'],
    category: 'Python / Education',
    githubUrl: '[GitHub Repository]',
    hasInteractiveDemo: true,
    demoType: 'grade',
    pythonCode: `# Student Grade Calculator
# Language: Python 3
# Demonstrates: Iterating lists, averages, grading scales

def calculate_grade(average):
    if average >= 90:
        return 'A+ (Outstanding)'
    elif average >= 80:
        return 'A (Excellent)'
    elif average >= 70:
        return 'B (Good)'
    elif average >= 60:
        return 'C (Satisfactory)'
    elif average >= 50:
        return 'D (Pass)'
    else:
        return 'F (Needs Improvement)'

def run_grade_calculator():
    print("=== Student Grade Calculator ===")
    student_name = input("Enter student name: ").strip()
    num_subjects = int(input("Enter number of subjects: "))
    
    marks = []
    for i in range(num_subjects):
        mark = float(input(f"Enter marks for subject {i+1} (out of 100): "))
        marks.append(mark)
        
    total_marks = sum(marks)
    average = total_marks / num_subjects
    grade = calculate_grade(average)
    
    print(f"\\n--- Report for {student_name} ---")
    print(f"Total Marks: {total_marks:.1f} / {num_subjects * 100}")
    print(f"Average Percentage: {average:.2f}%")
    print(f"Final Grade: {grade}")

if __name__ == "__main__":
    run_grade_calculator()
`,
  },
];

export const activitiesData: ActivityItem[] = [
  {
    id: 'hackathons',
    title: 'Hackathons',
    category: 'Collaborative Problem Solving',
    description:
      'Participated in hackathons to explore problem-solving, teamwork, rapid prototyping, and technology-driven solutions.',
    learnings: [
      'Rapid problem framing and scoping under tight time constraints',
      'Collaborative team dynamics and division of programming tasks',
      'Brainstorming minimal viable prototypes (MVP) with practical code',
      'Learning to quickly debug and present ideas to peers and mentors',
    ],
  },
  {
    id: 'ideathons',
    title: 'Ideathons',
    category: 'Innovation & Conceptualization',
    description:
      'Participated in ideathons focused on developing and presenting technology-based ideas to solve real-world problems.',
    learnings: [
      'Identifying real-world community and campus friction points',
      'Formulating technology-driven solution architectures',
      'Structuring concise, persuasive presentations and slide decks',
      'Receiving feedback from evaluation panels on feasibility and impact',
    ],
  },
];

export const learningJourneyData: JourneyStep[] = [
  {
    step: '01',
    title: 'Programming Foundations',
    status: 'Completed',
    description: 'Learning Python and strengthening programming fundamentals.',
    highlights: [
      'Core syntax, data types, loops, and conditional structures',
      'Writing reusable functions and procedural programs',
      'Algorithmic problem solving and basic debugging techniques',
    ],
  },
  {
    step: '02',
    title: 'Web Development',
    status: 'In Progress',
    description: 'Exploring frontend technologies and learning how websites are structured and built.',
    highlights: [
      'Semantic HTML5 structure and clean document hierarchies',
      'Modern responsive CSS styling, flexbox, and grid layouts',
      'Introduction to JavaScript for interactive web experiences',
    ],
  },
  {
    step: '03',
    title: 'Artificial Intelligence',
    status: 'In Progress',
    description: 'Building foundational knowledge in Artificial Intelligence.',
    highlights: [
      'Introductory principles of intelligent agents and search algorithms',
      'Understanding data representations and mathematical foundations',
      'Exploring how machine learning models learn patterns from data',
    ],
  },
  {
    step: '04',
    title: 'Generative AI',
    status: 'In Progress',
    description: 'Beginning to explore Generative AI concepts, tools, and applications.',
    highlights: [
      'Understanding large language models and token generation basics',
      'Effective prompt structuring and context engineering',
      'Experimenting with modern AI APIs to build helpful utility prototypes',
    ],
  },
  {
    step: '05',
    title: 'Future Goal',
    status: 'Upcoming',
    description: 'Developing the skills required to become an AI Engineer.',
    highlights: [
      'Deepening knowledge in machine learning algorithms and neural architectures',
      'Building full-stack AI-integrated software applications',
      'Contributing to open-source developer initiatives and AI research',
    ],
  },
];

export const currentlyLearningData: CurrentlyLearningItem[] = [
  {
    id: 'adv-python',
    topic: 'Advanced Python',
    category: 'Programming',
    description: 'Object-oriented programming, file I/O, error handling, and standard library modules.',
  },
  {
    id: 'web-dev',
    topic: 'Web Development',
    category: 'Frontend',
    description: 'Modern component-driven web interfaces, responsive layouts, and interactive DOM.',
  },
  {
    id: 'ai-fundamentals',
    topic: 'Artificial Intelligence Fundamentals',
    category: 'Core AI',
    description: 'Foundational AI concepts, algorithmic search, and computational logic.',
  },
  {
    id: 'gen-ai',
    topic: 'Generative AI',
    category: 'Emerging Tech',
    description: 'Prompt engineering, model reasoning patterns, and beginner-level API exploration.',
  },
  {
    id: 'problem-solving',
    topic: 'Problem Solving',
    category: 'Logic & Math',
    description: 'Practicing algorithmic questions to build sharp mental models and clean code instincts.',
  },
  {
    id: 'practical-projects',
    topic: 'Building Practical Projects',
    category: 'Applied Software',
    description: 'Applying newly learned concepts into small, working software tools and utilities.',
  },
];
