# test.py
def application(env, start_response):
    start_response('200 OK', [('Content-Type','text/html')])
    print('===============')
    return [b"Hello World"] # python3

