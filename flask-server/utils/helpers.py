import boto3, botocore
from botocore.client import ClientError
from config import BUCKET_NAME
# from config import S3_KEY, S3_SECRET, S3_BUCKET

# s3 = boto3.client(
#    "s3",
# #    aws_access_key_id=S3_KEY,
# #    aws_secret_access_key=S3_SECRET
# )

s3 = boto3.client("s3")

from botocore.client import ClientError


# def check_bucket(bucket):
#     try:
#     except botocore.exceptions.ClientError as e:
#         # If a client error is thrown, then check that it was a 404 error.
#         # If it was a 404 error, then the bucket does not exist.
#         error_code = int(e.response['Error']['Code'])
#         if error_code == 403:
#             print("Private Bucket. Forbidden Access!")
#             return True
#         elif error_code == 404:
#             print("Bucket Does Not Exist!")
#             return False


def verify_s3_bucket(bucket_name):
    """
    Check if bucket exists if not create
    """
    try:
        s3.head_bucket(Bucket=bucket_name)
        print(bucket_name + 'Bucket already present')
        return True
    except ClientError:
        s3.create_bucket(Bucket=bucket_name, CreateBucketConfiguration={'LocationConstraint': 'ap-south-1'})
        return bucket_name + 'Bucket created'
    

def upload_file_to_s3(file_storage, bucket_name, fname, acl="public-read"):
    try:         
        verify_s3_bucket(bucket_name=bucket_name)
        if not fname:
            fname = file_storage.filename
        s3.upload_fileobj(
            file_storage,
            bucket_name,
            fname,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file_storage.content_type
                }
            )
    except Exception as e:
        # This is a tmp catch all exception
        print("Something Happened: ", e)
        return e

