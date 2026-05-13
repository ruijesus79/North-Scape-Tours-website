import sys

path = r'c:\Users\Anton\North-Scape-Tours-website-main\src\content.ts'
with open(path, 'r', encoding='latin-1') as f: # Read as latin-1 to see what's there
    content = f.read()

# Fix the specific broken line
# Line 890 was something like: { title: 'Transfert Htel ' Aport'
# I'll look for that pattern and fix it.
import re

# Match the problematic line and replace it
# Note: the corrupted characters might look different in python
pattern = r"title: 'Transfert H.*?tel .*? A.*?roport'"
replacement = "title: 'Transfert H\\u00F4tel \\u2192 A\\u00E9roport'"
content = re.sub(pattern, replacement, content)

# Also fix general corrupted characters if possible, but let's at least fix the syntax error
content = content.replace("Ǹ", "é")
content = content.replace("ǭ", "à")
content = content.replace("Ǭ", "ü")
content = content.replace("Ǧ", "ê")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed!")
