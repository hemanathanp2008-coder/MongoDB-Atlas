// Connect with mongosh using your Atlas credentials:
// mongosh "mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/companyCloudDB" deploymentLogs.js

const deploymentDb = db.getSiblingDB("companyCloudDB");

// Insert cloud deployment log entry
deploymentDb.deploymentLogs.insertOne({
  environment: "Production-Cloud",
  provider: "AWS / MongoDB Atlas",
  status: "Active",
  deployedAt: new Date(),
  region: "us-east-1"
});

// Query active deployment status
deploymentDb.deploymentLogs.find({ status: "Active" }).pretty();
