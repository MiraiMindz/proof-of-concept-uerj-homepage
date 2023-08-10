#!/usr/bin/env bash

requests_number=32

send_request() {
    resp=$(curl -s http://localhost:8080/user)
    echo "Response: $resp"
}

export -f send_request

seq $requests_number | parallel -j16 send_request

