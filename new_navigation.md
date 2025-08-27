# Proposed Navigation Structure for Action Model Docs

## Current Issues
- Duplicate content (e.g., Bounties appears in both "Reward Mechanisms" and "Dashboard")
- Background Training appears in multiple places
- Some sections feel redundant or could be better organized
- Desktop App deserves more prominence as a major product

## Proposed New Structure

### 1. Introduction
- Welcome/Overview (index.mdx)
- The Community-Owned AI Future
- Large Action Models Are the Future
- Graphical Interfaces are King
- The Problem with APIs

### 2. Desktop App
- Agents
- Workflows
- Workflow Training
- Schedules
- Chains
- Memories

### 3. Browser Extension & Training
- Browser Extension Overview
- The Action Tree
- Extension & Desktop Training
- Background Workflow Training
- Public vs Private Action Trees
- Security & Privacy

### 4. Dashboard
- Dashboard Overview
- Referrals
- Bounties
- Background Training Management
- Website Block Lists
- Statistics & Earnings

### 5. Marketplace
- Marketplace Overview
- Buying & Selling Workflows
- Workflow Creation Guidelines
- Pricing & Revenue Sharing
- Featured Workflows
- Community Contributions

### 6. Tokenomics
- Token Overview ($LAM)
- Earning Through Training
- Cost Per Action
- Deflationary Model
- Token Distribution

### 7. Partnerships
- Data Partnerships
- Processing DePIN
- Bounty Programs
- Resellers
- Enterprise Solutions

## Benefits of This Structure

1. **Clearer Organization**: Each section has a distinct purpose without overlap
2. **Desktop App Prominence**: Gets its own dedicated section reflecting its importance
3. **Marketplace Visibility**: Dedicated section for the workflow marketplace ecosystem
4. **Logical Grouping**: Browser Extension is grouped with Training since they're closely related
5. **Simplified Navigation**: Removes redundant sections like "Reward Mechanisms"
6. **Better User Journey**: Flows from introduction → products → how to earn → marketplace → economics → business

## Implementation Notes

### Files to Update
- `docs.json`: Update the navigation groups structure
- Move/reorganize existing MDX files to match new structure
- Consider creating overview pages for each major section

### Considerations
- Some pages may need to be merged or split (e.g., consolidate all Background Training content)
- May need to create new overview pages for sections like "Dashboard Overview" or "API Overview"
- Ensure all existing content is accounted for in the new structure