import http.server
import socketserver
import webbrowser
import threading
import time

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching for easier development/testing
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            import subprocess
            import json
            
            # Fetch git status details
            try:
                git_branch = subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD']).decode('utf-8').strip()
                git_commit = subprocess.check_output(['git', 'log', '-1', '--format=%h - %s (%an, %cr)']).decode('utf-8').strip()
                git_status = subprocess.check_output(['git', 'status', '--short']).decode('utf-8').strip()
            except Exception as e:
                git_branch = "unknown"
                git_commit = "unknown"
                git_status = str(e)
                
            status_data = {
                "project": "CatMouthOpeningAnimation",
                "branch": git_branch,
                "latest_commit": git_commit,
                "git_status": git_status,
                "port": PORT
            }
            self.wfile.write(json.dumps(status_data).encode('utf-8'))
        elif self.path == '/work':
            self.path = '/index.html'
            super().do_GET()
        else:
            super().do_GET()

def start_server():
    Handler = MyHandler
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    # Start server in a separate thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    
    # Wait a moment for server to bind
    time.sleep(0.5)
    
    # Open default browser to port 8000
    webbrowser.open(f"http://localhost:{PORT}")
    
    # Keep main thread alive
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nStopping server.")
