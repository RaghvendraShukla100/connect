CREATE TABLE job_applications (
  application_id UUID PRIMARY KEY,
  user_id UUID,
  job_id UUID,
  status VARCHAR(20),
  applied_at TIMESTAMP
);

CREATE TABLE payments (
  payment_id UUID PRIMARY KEY,
  user_id UUID,
  amount DECIMAL,
  status VARCHAR(20),
  paid_at TIMESTAMP
);
