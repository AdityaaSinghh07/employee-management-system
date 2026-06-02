variable "project" {
  default = "employee-mgmt"
}

variable "db_username" {
  default = "admin"
}

variable "db_password" {
  sensitive = true
}

variable "key_name" {
  type = string
}
