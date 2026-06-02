resource "aws_db_subnet_group" "db_subnet" {
  name = "employee-db-subnet"

  subnet_ids = [
    aws_subnet.private_1.id,
    aws_subnet.private_2.id
  ]
}

resource "aws_db_instance" "mysql" {
  identifier = "employee-db"

  engine         = "mysql"
  engine_version = "8.0"
  instance_class = "db.t3.micro"

  allocated_storage = 20

  db_name  = "employee_db"
  username = var.db_username
  password = var.db_password

  skip_final_snapshot = true

  db_subnet_group_name   = aws_db_subnet_group.db_subnet.name
  vpc_security_group_ids = [aws_security_group.rds_sg.id]

  publicly_accessible = false
}
