#!/bin/bash

# Zod Validation Test Script
# This script demonstrates the Zod validation implementation

echo "🧪 Testing Zod Validation Implementation"
echo "========================================"

# Test 1: Valid data
echo ""
echo "Test 1: Valid user data"
echo "curl -X POST http://localhost:3000/api/user -H 'Content-Type: application/json' -d '{\"name\":\"Alice\",\"email\":\"alice@example.com\",\"total\":100}'"

# Test 2: Invalid email format
echo ""
echo "Test 2: Invalid email format"
echo "curl -X POST http://localhost:3000/api/user -H 'Content-Type: application/json' -d '{\"name\":\"Alice\",\"email\":\"not-an-email\",\"total\":100}'"

# Test 3: Name too short
echo ""
echo "Test 3: Name too short"
echo "curl -X POST http://localhost:3000/api/user -H 'Content-Type: application/json' -d '{\"name\":\"A\",\"email\":\"alice@example.com\",\"total\":100}'"

# Test 4: Missing total
echo ""
echo "Test 4: Missing required total field"
echo "curl -X POST http://localhost:3000/api/user -H 'Content-Type: application/json' -d '{\"name\":\"Alice\",\"email\":\"alice@example.com\"}'"

# Test 5: Invalid total (negative)
echo ""
echo "Test 5: Invalid total (negative number)"
echo "curl -X POST http://localhost:3000/api/user -H 'Content-Type: application/json' -d '{\"name\":\"Alice\",\"email\":\"alice@example.com\",\"total\":-10}'"

echo ""
echo "✅ Expected responses for validation errors:"
echo '{"success": false, "message": "Validation Error", "errors": [{"field": "fieldName", "message": "validation message"}]}'

echo ""
echo "📋 To test these endpoints:"
echo "1. Start the development server: cd shiksha-connect && npm run dev"
echo "2. Run the curl commands above in another terminal"
echo "3. Observe the structured validation error responses"

echo ""
echo "🎯 Implementation Summary:"
echo "• Zod schemas defined in src/libs/schemas/userSchema.ts"
echo "• Validation handler in src/libs/validationHandler.ts"
echo "• API routes updated with validation in src/app/api/user/route.ts and src/app/api/test/route.ts"
echo "• Comprehensive documentation in ZOD_VALIDATION_README.md"
