
This is a project from [roadmap.sh](https://roadmap.sh/projects/task-tracker)

To install this, just clone the repo
then in terminal navigate to the folder by cd in code editor
type 'npm install -g' in the terminal to install the cli app and start using it


Task Tracker Cli which has the following features

# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress

