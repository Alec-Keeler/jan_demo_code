const bcrypt = require('bcryptjs');

// hash
// compare

// Task 35a
async function generateHash(password) {
    console.log(await bcrypt.hash(password, 10))
}

// generateHash('password123')

// $2a$10$yBdL5R8LrgpBUvdC1icROe1enQq30NUryOplh2LhOLMCTgh5hg9We

// $2a - algorithm
// $10 - cost factor
// $yBdL5R8LrgpBUvdC1icROe1e - salt (first 22 characters)
// nQq30NUryOplh2LhOLMCTgh5hg9We - hashed output

// Task 35b
async function checkPass(password, hash) {
    const isPassword = await bcrypt.compare(password, hash)

    console.log(isPassword)
}

checkPass('password123', '$2y$10$yBdL5R8LrgpBUvdC1icROe1enQq30NUryOplh2LhOLMCTgh5hg9We')