#!/bin/bash

echo "🧪 Testing ShikshaConnect Authentication APIs"
echo "=============================================="

BASE_URL="http://localhost:3000/api"

echo ""
echo "1. Testing Signup Endpoint"
echo "--------------------------"
echo "Creating a new user..."
curl -X POST "$BASE_URL/auth/signup" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "password": "securepassword123"
  }' | jq '.'

echo ""
echo "2. Testing Login Endpoint"
echo "-------------------------"
echo "Logging in with the created user..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "alice@example.com",
    "password": "securepassword123"
  }')

echo "$LOGIN_RESPONSE" | jq '.'

# Extract token for protected route test
TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.token // empty')

echo ""
echo "3. Testing Protected Route"
echo "--------------------------"
if [ -n "$TOKEN" ] && [ "$TOKEN" != "null" ]; then
  echo "Accessing protected route with token..."
  curl -X GET "$BASE_URL/users" \
    -H "Authorization: Bearer $TOKEN" | jq '.'
else
  echo "⚠️  No token available. Please ensure signup and login work first."
fi

echo ""
echo "4. Testing Error Scenarios"
echo "--------------------------"
echo "Testing signup with existing user..."
curl -X POST "$BASE_URL/auth/signup" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bob Smith",
    "email": "alice@example.com",
    "password": "password123"
  }' | jq '.'

echo ""
echo "Testing login with wrong credentials..."
curl -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "alice@example.com",
    "password": "wrongpassword"
  }' | jq '.'

echo ""
echo "Testing protected route without token..."
curl -X GET "$BASE_URL/users" | jq '.'

echo ""
echo "✅ API Testing Complete!"
