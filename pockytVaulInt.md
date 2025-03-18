# Tutorial: Enabling Vaulting and 3DSecure for Pockyt Integration

This guide walks developers through setting up a secure payment workflow with the Pockyt Capture API, enabling 3DSecure authentication, and utilizing the vaulting feature for storing and reusing payment credentials.

---

## Workflow Overview

1. **Create a Customer Number**: Register a customer in the Pockyt system.
2. **Capture Card Details with Vaulting**: Securely store card information and trigger 3DSecure authentication.
3. **Handle IPN Webhook**: Extract the `vaultId` from the webhook payload.
4. **Perform Transactions with VaultId**: Use the stored `vaultId` for future transactions without requiring card details.

---

## Step-by-Step Implementation

### Step 1: Create a Customer Number

**API Endpoint**:  
`POST https://mapi.yuansfer.yunkeguan.com/v1/customers/create`

**Sample cURL Request**:
```bash
curl -X POST https://mapi.yuansfer.yunkeguan.com/v1/customers/create \
-H "Content-Type: application/json" \
-d '{
  "merchantNo": "203780",
  "storeNo": "303661"
}'

{
  "status": 200,
  "resultBody": {
    "customerNo": "2000357955353018248632"
  }
}


Step 2: Capture Card Information and Vault
API Endpoint:
POST https://mapi.yuansfer.yunkeguan.com/order/v4/capture

curl -X POST https://mapi.yuansfer.yunkeguan.com/order/v4/capture \
-H "Content-Type: application/json" \
-d '{
  "merchantNo": "203780",
  "storeNo": "303661",
  "creditType": "vault",
  "amount": "20",
  "cardNumber": "4111111111111111",
  "cardExpMonth": "08",
  "cardExpYear": "2030",
  "cardCvv": "790",
  "currency": "USD",
  "customerNo": "2000357955353018248632",
  "reference": "3dpHAAHPtU",
  "settleCurrency": "USD",
  "vendor": "creditcard",
  "terminal": "ONLINE",
  "goodsInfo": "[{\"goods_name\":\"test\",\"quantity\":\"1\",\"category\":\"DIGITAL_GOODS\",\"description\":\"testing\",\"amount\":\"10.00\",\"tax\":\"0\"}]",
  "ipnUrl": "https://webhook.site/70bdb6d1-2401-4d01-8b1f-b62b4784d8a2",
  "callbackUrl": "https://demo.pockyt.io/",
  "verifySign": "0aa12ad27f9d0257019545c2879cf2fb"
}'

{
  "status": 200,
  "resultBody": {
    "authenticationUrl": "https://www.sandbox.paypal.com/webapps/helios?action=verify&flow=3ds&cart_id=57785247L5766591F",
    "customerNo": "2000299440486216204525",
    "transactionNo": "378125656535259873",
    "status": "pending"
  }
}


Step 3: Handle Webhook to Extract VaultId
Webhook Payload Example:

amount=20.00&completedAt=2024-12-03T20:36:05Z&currency=USD&customerNo=2000357955353018248632&reference=mbUzv1dsye&settleCurrency=USD&status=success&transactionNo=377834846405829386&vaultId=pp_77770bd70e2742a8b35c0b77e6ec1e6d&verifySign=4daef02b5ab12f3f77a0408a4dbcb469

Extracted vaultId:
pp_77770bd70e2742a8b35c0b77e6ec1e6d


Step 4: Perform Future Transactions with VaultId
API Endpoint:
POST https://mapi.yuansfer.yunkeguan.com/order/v4/capture

Sample cURL Request:

curl -X POST https://mapi.yuansfer.yunkeguan.com/order/v4/capture \
-H "Content-Type: application/json" \
-d '{
  "merchantNo": "203780",
  "storeNo": "303661",
  "amount": "20",
  "vaultId": "pp_77770bd70e2742a8b35c0b77e6ec1e6d",
  "currency": "USD",
  "customerNo": "2000357955353018248632",
  "reference": "WJRWqykpqM",
  "settleCurrency": "USD",
  "vendor": "creditcard",
  "terminal": "ONLINE",
  "ipnUrl": "https://webhook.site/e9ea9bfe-978c-4957-9845-9d1d22f20380",
  "callbackUrl": "https://demo.pockyt.io/",
  "goodsInfo": "[{\"goods_name\":\"test\",\"quantity\":\"1\",\"category\":\"DIGITAL_GOODS\",\"description\":\"testing\",\"amount\":\"10.00\",\"tax\":\"0\"}]",
  "verifySign": "64a3466e3e6515eb3edae8ce0af81bfa"
}'


{
  "status": 200,
  "resultBody": {
    "amount": "20.00",
    "currency": "USD",
    "customerNo": "2000299440486216204525",
    "transactionNo": "377834846405829387",
    "status": "success",
    "paymentTime": "2024-12-03T21:00:00Z",
    "reference": "WJRWqykpqM"
  }
}