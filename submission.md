## 1. Student Details

- **Full Name:** Joshua Kitto Munyirwa
- **GitHub Username:** KittoJoshua
- **Email:** [joshua.munyirwa@strathmore.edu]

2. Deployed Project Link
- **Live GitHub Pages URL:** (https://is-project-2026.github.io/academic-tracking-169957/)
3. Reflection — Grounded in Your Git History
Rules: Every answer below must include a direct link to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.

Marks: A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = 5 marks total

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/academic-tracking-169957/commit/bd7532e
- **Why this one?** This commit demonstrates good Conventional Commit practice because it uses the `feat` type with a clear `calculations` scope and a concise imperative description.


### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/academic-tracking-169957/pull/15
- **What happened and how did you recover?** I intentionally created a merge conflict between two branches that modified the same part of the README. The merge could not be completed automatically, so I inspected the conflict locally, resolved the competing changes, committed the resolution, and completed the pull request merge.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/academic-tracking-169957/pull/19
- **What did you check before merging?** I reviewed the changed files and verified that the academic calculations were working as intended. I also checked that the PR came from the issue-linked feature branch and that the PR correctly closed Issue #7 before merging it into `main`.

### D. One Thing You Would Do Differently

- **What would you change?** I would establish the final branch structure and naming convention before creating the first feature branch. During the project I had to recreate a feature branch while correcting the initial repository history, which added unnecessary branch-management work.
- **Link to the evidence of the original decision:**  https://github.com/IS-PROJECT-2026/academic-tracking-169957/commit/046371b0b6c40b1ed0188827d7c6137f8d9ba7a9


4. Screenshots of Key GitHub Features
Demonstrate your workflow mechanics by embedding your screenshots below.

CRITICAL FOR WORKING IMAGES: Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and paste (Ctrl+V / Cmd+V) your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

A. Milestones and Issues
Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.


<img width="434" height="302" alt="image" src="https://github.com/user-attachments/assets/ce485e08-f9f6-4954-adb4-12ef85080462" />


- **Caption:** The project milestones organize the major development phases, while individual issues provide granular technical tasks linked to each milestone.
B. Project Board
Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).


<img width="806" height="432" alt="image" src="https://github.com/user-attachments/assets/16412ec5-48a7-4b46-bf76-b490db1e4539" />


- **Caption:** The Kanban project board tracks development work from planned tasks through active implementation to completed issues.
- 
C. Branching Architecture
Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., feat/, fix/, style/).


<img width="238" height="315" alt="image" src="https://github.com/user-attachments/assets/887f046e-0294-4cb0-bccf-d60a7d329028" />


- **Caption:** The branch structure demonstrates isolated development using issue-linked Conventional Branch naming patterns such as feat, style, docs and conflict branches.(NB; after PR i had deleted some branches because i hadnt seen these new instructions)
- 
D. Pull Requests & Traceability
Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.


<img width="835" height="410" alt="image" src="https://github.com/user-attachments/assets/0bf50f10-2618-49a6-8585-2c5b16901eb7" />


- **Caption:** PR  demonstrates traceability from the feature branch to the final merge into main.
5. Merge Conflict Evidence
You must engineer three merge conflicts, each triggered by a different cause from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

Marks: Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = 5 marks total

Conflict 1 — Full Chronology
What cause did you use? Same-line modification conflict.

Step 1: Generating the Clash
Screenshot showing the merge attempt and the conflict warning.

<img width="678" height="164" alt="image" src="https://github.com/user-attachments/assets/216316fe-715c-4562-8704-13989df7f8ca" />


Caption:Two branches modified the same existing line of README.md differently. Git could not determine which version should be retained, so it stopped the merge and required manual resolution.
Step 2: Inside the Code Editor (Conflict Markers)
Screenshot showing the raw, unresolved conflict markers (<<<<<<< HEAD, =======, >>>>>>>) in your editor.
<img width="678" height="164" alt="image" src="https://github.com/user-attachments/assets/216316fe-715c-4562-8704-13989df7f8ca" />



 **Caption:** VS Code displayed the raw conflict markers showing the competing README changes. I reviewed both versions and selected the appropriate combined project description before removing the conflict markers.
Step 3: Resolution & Clean Merge
Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.

<img width="571" height="164" alt="image" src="https://github.com/user-attachments/assets/146b7acd-cc3e-4821-9b57-76527c019531" />


- **Caption:** The conflicting README changes were resolved, committed, and merged through the pull request after verifying that the final file was clean.
- 
Conflict 2 — Different Cause
What cause did you use? Add/add conflict.

Why does this cause trigger a conflict? An add/add conflict occurs when two branches independently create a file at the same path. Git cannot automatically decide which newly created version should become the final file, so both versions require manual resolution.

<img width="677" height="194" alt="image" src="https://github.com/user-attachments/assets/eb151298-6116-4889-9677-9d45fbffac16" />


Caption: Branches `conflict/2-add-a` and `conflict/2-add-b` independently created `conflict-demo.txt`, producing an add/add conflict when the branches were merged.

Conflict 3 — Different Cause
What cause did you use? 
Modify/delete conflict.

Why does this cause trigger a conflict? A modify/delete conflict occurs when one branch modifies a file while another branch deletes the same file. Git cannot automatically determine whether the final version should preserve the modified file or keep the deletion, so manual resolution is required.

<img width="532" height="281" alt="image" src="https://github.com/user-attachments/assets/725fe13a-f229-49a1-9506-d8db1a598534" />


Caption: Branch `conflict/3-modify` modified `README.md` while branch `conflict/3-delete` deleted the same file. Git reported a modify/delete conflict, which was manually resolved by keeping the appropriate README version.



