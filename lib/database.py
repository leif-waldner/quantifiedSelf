import rethinkdb as r
from tornado import gen
from tornado import ioloop
import random

r.set_loop_type("tornado")
connection = r.connect(db='pilot', host='localhost', port=28015)

@gen.engine
def init():
    conn = yield connection
    print "Connecting"
    try:
        print "Creating DB"
        yield r.db_create("pilot").run(conn)
    except:
        print "database already exists"

    try:
        print "Creating tables"
        conn.use('pilot')
        yield r.table_create('users').run(conn)
        yield r.table_create('google').run(conn)
    except:
        print "tables already exist"
ioloop.IOLoop().instance().add_callback(init)

@gen.coroutine
def user_insert(data):
    conn = yield connection
    result = yield r.table('users').insert(
            data,
            conflict = "update",
            ).run(conn)
    raise gen.Return(result)


@gen.coroutine
def google_user(data):
    conn = yield connection
    #start grabbing user ID
    result = yield r.table('google').insert(
            data,
            conflict='update',
            ).run(conn)
    raise gen.Return(result)