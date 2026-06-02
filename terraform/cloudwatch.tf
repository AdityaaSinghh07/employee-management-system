resource "aws_cloudwatch_log_group" "app_logs" {
  name = "/employee/app"
}

resource "aws_cloudwatch_metric_alarm" "cpu_alarm" {
  alarm_name          = "ec2-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 120
  statistic           = "Average"
  threshold           = 70

  dimensions = {
    InstanceId = aws_instance.app.id
  }
}
