## Code Changes Assigned

**Assignee:** Nitin Reddy  
**Task:** Container fix  

**Description:**  
The container is not holding both buttons correctly, causing them to lose center alignment.  
This is likely due to the **"No" button using `position: fixed`**, which removes it from normal layout flow.  

The goal is to:
- Fix the alignment so **both buttons stay centered**
- Ensure the container properly contains them
- **Do not break existing button behavior or interaction logic**

### Current Issue (Visual Reference)
<img width="811" height="848" alt="Screenshot 2026-02-07 at 4 49 07 PM" src="https://github.com/user-attachments/assets/17f11422-1070-4c31-a708-2fd38576b09f" />
