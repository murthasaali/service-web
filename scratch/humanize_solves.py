import os
import re

# Comprehensive list of replacements to humanize the copy.
# Ordered by length descending programmatically below.
replacements = [
    # Process Automation & general operations
    ("Most operations teams spend hours each week on tasks a computer could handle", "Your operations team shouldn't waste hours on copy-paste work a computer can handle"),
    ("Most operations teams spend hours", "Operations teams often waste hours"),
    ("Data moves between tools manually, approvals sit in inboxes", "Data gets copied between tabs by hand, approvals wait in inboxes"),
    ("We map out your exact manual steps, identify where the friction and errors are", "We sit down with you to map out your steps and find where the bottlenecks are"),
    ("Multi-step workflow pipelines connecting CRMs, databases, and SaaS platforms", "Workflows that connect your CRM, databases, and SaaS tools"),
    ("Automated approval routing via Slack buttons or email forms", "Approvals routed directly to Slack buttons or email forms"),
    ("Scheduled report generation delivered directly to inboxes", "Reports generated and sent straight to your inbox"),
    ("Error fallback and retry logic with Slack or email notification alerts", "Built-in error alerts sent directly to your Slack or email"),
    ("Staff copying data between systems multiple times per day", "Copying data between systems multiple times a day"),
    ("Approval processes delayed because requests are not routed automatically", "Approvals sitting in inboxes because they aren't routed automatically"),
    ("Reports built manually from spreadsheets rather than generated automatically", "Building reports by hand from spreadsheets instead of auto-generating them"),
    ("No audit trail when manual processes fail or data goes missing", "No logs to trace what happened when data goes missing"),

    # Security & Infrastructure
    ("Infrastructure security is typically treated as a setup-once concern", "Security often gets set up once and then forgotten about"),
    ("security headers are missing, backups exist but have never been tested", "security headers are left empty, and backups are never actually tested"),
    ("disaster recovery plans are theoretical documents that have never been exercised", "disaster recovery plans only exist on paper and are never dry-run"),
    ("Businesses often discover these gaps only when a breach, ransomware incident", "Most teams only notice these gaps after a breach or ransomware attack"),
    ("Default server configurations with open ports, default credentials", "Open default server settings, default logins"),
    ("Backup systems that run automatically but whose restores have never been tested", "Auto-backups running without regular restore tests"),
    ("No documented disaster recovery plan, so a recovery scenario would be improvised", "No written playbook, leaving the team to guess what to do in a crisis"),
    ("Missing security headers and outdated dependencies creating known vulnerability", "Outdated packages and missing security headers exposing server files"),
    ("Infrastructure security audit covering server hardening", "Audits checking server hardening and packages"),
    ("Automated backup setup with offsite storage, encryption, and tested restore", "Encrypted offsite auto-backups with tested restore procedures"),
    ("Disaster recovery planning with defined recovery time objectives", "Disaster recovery plans with clear step-by-step restoration"),
    ("SSL configuration and security header implementation with ongoing monitoring", "SSL settings and security headers with uptime monitoring"),
    
    # Conversational AI
    ("Support teams handle the same questions repeatedly", "Support reps waste hours replying to the same basic questions"),
    ("Customers ask about order status, pricing, return policies", "Customers ask about shipping updates, pricing, and returns at all hours"),
    ("each query takes staff attention even when the answer is straightforward", "every simple ticket eats up time that could go to complex cases"),
    ("Scaling that volume with headcount is expensive and slow", "Hiring more staff to keep up with tickets gets expensive fast"),
    ("We build AI assistants that are trained specifically on your documentation", "We build AI bots trained on your actual documentation, guides, and products"),
    ("They answer questions accurately, connect to live systems for real-time data", "They answer questions accurately and check live database records"),
    ("route to a human agent when the query is outside their scope", "hand off complex requests to your team with full context"),
    ("Support staff spending time on repetitive, low-complexity questions", "Staff copy-pasting answers to simple, repetitive questions"),
    ("No coverage outside business hours for common customer inquiries", "Customers waiting until Monday morning for basic answers"),
    ("Knowledge scattered across documents, wikis, and team memory", "Info buried in docs, wikis, or individual team heads"),
    ("Generic chatbot scripts that fail when users phrase questions off", "Basic chatbots breaking when questions go off-script"),
    ("AI trained on your documentation, FAQs, and product knowledge base", "AI bots trained on your actual docs and product guides"),
    ("Live data connections for order status, bookings, and account lookups", "Integrations to look up order status, accounts, and bookings"),
    ("Multi-channel deployment across web chat, WhatsApp, Slack", "Support where customers are, from web chat to WhatsApp"),
    ("Structured escalation to human agents with full conversation context", "Smooth handoffs to human agents so customers don't repeat themselves"),

    # Digital Marketing
    ("Marketing teams struggle to track campaign performance", "It's hard to tell which marketing campaigns are actually bringing in revenue"),
    ("data-driven insights", "clear stats"),
    ("empowering marketing teams", "helping your marketing team"),
    ("maximize reach and ROI", "get more customers"),
    ("optimize conversion rates", "increase customer sales"),
    ("streamline campaign management", "simplify campaign management"),

    # Web & Software Development
    ("Empowering businesses with custom software solutions", "Building custom software that matches your actual workflow"),
    ("streamline core business processes", "simplify your core business steps"),
    ("highly scalable architecture", "setups that grow with your user base"),
    ("robust security and high performance", "reliable security and high speed"),
    ("without sacrificing user experience", "while keeping it easy to use"),
    ("without compromising performance", "without slowing things down"),
    ("uncompromised performance", "high speed"),
    ("uncompromising focus on quality", "focus on clean code"),
    ("We design and build", "We build"),
    ("We design, build, and deploy", "We build and deploy"),
    ("Typically treated as a setup-once concern", "Often gets set up once and forgotten"),
    ("Businesses typically struggle with", "You might find yourself dealing with"),
    ("optimize processes", "save staff time"),
    ("streamline workflows", "simplify workflows"),
    ("without staff intervention", "automatically"),
    ("minimize manual effort", "save hours of work"),
    ("enhance user experience", "make it easier to use"),
    ("improve operational efficiency", "speed up operations"),
]

# Sort replacements by length of the original string descending to prevent partial replacements.
replacements.sort(key=lambda x: len(x[0]), reverse=True)

# Inflated buzzwords to remove or soften
buzzwords = ["streamlined", "optimized", "seamless", "robust", "enterprise-grade", "world-class", "cutting-edge"]

def humanize_text(text):
    for orig, repl in replacements:
        pattern = re.compile(re.escape(orig), re.IGNORECASE)
        text = pattern.sub(repl, text)
    
    for word in buzzwords:
        # replace with empty space
        text = re.compile(rf'\b{word}\s*', re.IGNORECASE).sub("", text)
        text = re.compile(rf'\s*\b{word}\b', re.IGNORECASE).sub("", text)
    
    # Clean up double spaces
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def parse_points(raw):
    # Regex to capture content inside double quotes
    return [p.strip() for p in re.findall(r'"(.*?)"', raw)]

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find solves: { ... } block
    solves_match = re.search(r'solves:\s*\{(.*?)\},', content, re.DOTALL)
    if not solves_match:
        return False

    solves_content = solves_match.group(1)
    
    # Extract challenge
    challenge_match = re.search(r'challenge:\s*"(.*?)",', solves_content)
    # Extract challengePoints
    challenge_points_match = re.search(r'challengePoints:\s*\[(.*?)\]', solves_content, re.DOTALL)
    # Extract solution
    solution_match = re.search(r'solution:\s*"(.*?)",', solves_content)
    # Extract solutionPoints
    solution_points_match = re.search(r'solutionPoints:\s*\[(.*?)\]', solves_content, re.DOTALL)

    if not (challenge_match and challenge_points_match and solution_match and solution_points_match):
        return False

    challenge = challenge_match.group(1)
    challenge_points_raw = challenge_points_match.group(1)
    solution = solution_match.group(1)
    solution_points_raw = solution_points_match.group(1)

    challenge_points = parse_points(challenge_points_raw)
    solution_points = parse_points(solution_points_raw)

    # Humanize
    h_challenge = humanize_text(challenge)
    h_challenge_points = [humanize_text(p) for p in challenge_points]
    h_solution = humanize_text(solution)
    h_solution_points = [humanize_text(p) for p in solution_points]

    # Reconstruct solves block
    new_challenge_points_str = ",\n      ".join(f'"{p}"' for p in h_challenge_points)
    new_solution_points_str = ",\n      ".join(f'"{p}"' for p in h_solution_points)

    new_solves = f'''solves: {{
    challenge:
      "{h_challenge}",
    challengePoints: [
      {new_challenge_points_str}
    ],
    solution:
      "{h_solution}",
    solutionPoints: [
      {new_solution_points_str}
    ],
  }},'''

    new_content = content.replace(solves_match.group(0), new_solves)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

# Walk through all directories inside src/app/services and process subservice files
services_dir = '/home/user/Documents/service-web/src/app/services'
processed_count = 0

for root, dirs, files in os.walk(services_dir):
    # Only process page.tsx files at depth 2 under services/ (e.g. services/automation/process-automation/page.tsx)
    # Relative path from services_dir
    rel_path = os.path.relpath(root, services_dir)
    if rel_path == '.' or '/' not in rel_path:
        continue
    
    for file in files:
        if file == 'page.tsx':
            filepath = os.path.join(root, file)
            if process_file(filepath):
                processed_count += 1
                print(f"Processed: {rel_path}/page.tsx")

print(f"Humanization run complete. Total processed files: {processed_count}")
