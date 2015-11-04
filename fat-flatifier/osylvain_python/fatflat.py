import math

FAT = 'fat'
FLAT = 'flat'


def fat_flatify(n, k):
    if n < 1:
        return []

    number_of_fats = math.floor(n/2)
    number_of_flats = n - number_of_fats
    maximum_reachable_k = number_of_fats * number_of_flats

    if k > maximum_reachable_k:
        return []

    number_of_starting_fats = int(math.floor(k / number_of_flats))
    remaining_flats_to_pair = int(k % number_of_flats)
    trailing_fats = number_of_fats - number_of_starting_fats

    fat_flats = [FAT for i in range(number_of_starting_fats)]
    fat_flats.extend([FLAT for i in range((number_of_flats - remaining_flats_to_pair))])
    if remaining_flats_to_pair > 0:
        fat_flats.append(FAT)
        trailing_fats -= 1
        fat_flats.extend([FLAT for i in range(remaining_flats_to_pair)])
    fat_flats.extend([FAT for i in range(trailing_fats)])

    return fat_flats


def verify(result_array, n, k):
    if len(result_array) is 0:
        if n < 1:
            return True
        if k > math.floor(n/2) * (n - math.floor(n/2)):  # maximum reacheable k, this might not be exact.
            return True
    elif len(result_array) is not n:
        return False

    score = 0
    for index, value in enumerate(result_array):
        if value is FAT:
            score += result_array[index:].count(FLAT)

    if score != k:
        return False

    return True


if __name__ == "__main__":
    n = -1
    k = 0

    result = fat_flatify(n, k)
    print(result if verify(result, n, k) else 'Nope! try again fool!')
