def sumpair(M, N):
    for i in range(len(M)):
        for j in range(i + 1, len(M)):
            sum = M[i] + M[j]
            if sum == N:
                return [M[i], M[j]]
    return []

M = [2,5,8,14,0]
N = 10
print(sumpair(M, N))